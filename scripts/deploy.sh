#!/usr/bin/env bash
# Construit le site puis envoie dist/ chez alwaysdata via rsync (SSH).
#
#   npm run deploy            → build, aperçu des changements, confirmation, envoi
#   npm run deploy -- --clean → idem, et supprime côté serveur les fichiers absents de dist/
#
# Configuration : copier .env.deploy.example en .env.deploy (non versionné) et le remplir.
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .env.deploy ]]; then
  echo "✗ .env.deploy introuvable. Copie .env.deploy.example en .env.deploy et remplis-le." >&2
  exit 1
fi
# shellcheck disable=SC1091
source .env.deploy

: "${DEPLOY_USER:?DEPLOY_USER manquant dans .env.deploy}"
: "${DEPLOY_HOST:?DEPLOY_HOST manquant dans .env.deploy}"
: "${DEPLOY_PATH:?DEPLOY_PATH manquant dans .env.deploy}"

CLEAN=false
[[ "${1:-}" == "--clean" ]] && CLEAN=true

echo "→ Build"
npm run build --silent

if [[ ! -f dist/index.html ]]; then
  echo "✗ dist/index.html absent : le build a échoué." >&2
  exit 1
fi

TARGET="${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH%/}/"
# .htaccess et .well-known (certificats) côté serveur ne sont jamais touchés, même avec --clean
RSYNC_OPTS=(-rlz --checksum --human-readable --itemize-changes
  --exclude=.DS_Store --exclude=.htaccess --exclude=.well-known/)
$CLEAN && RSYNC_OPTS+=(--delete)

echo
echo "→ Aperçu des changements vers ${TARGET}"
$CLEAN && echo "  (mode --clean : les fichiers distants absents de dist/ seront SUPPRIMÉS)"
rsync "${RSYNC_OPTS[@]}" --dry-run dist/ "$TARGET"

echo
read -r -p "Envoyer ces changements en production ? [o/N] " answer
if [[ ! "$answer" =~ ^[oOyY]$ ]]; then
  echo "Annulé, rien n'a été envoyé."
  exit 0
fi

rsync "${RSYNC_OPTS[@]}" dist/ "$TARGET"
echo
echo "✓ Déployé sur ${DEPLOY_HOST}:${DEPLOY_PATH}"
