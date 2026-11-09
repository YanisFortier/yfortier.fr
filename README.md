# yfortier.fr

Mon site personnel et portfolio : parcours, missions, formations et engagements.

Le site est accessible à l'adresse [yfortier.fr](https://www.yfortier.fr).

## Stack

- [Astro](https://astro.build) — site 100 % statique, sans JavaScript côté client hors menu mobile
- CSS fait main, police [Public Sans](https://public-sans.digital.gov/) auto-hébergée
- Contenu dans `src/data/*.ts`

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
```

## Mise en ligne

Le dossier `dist/` est ce qui est mis en ligne chez alwaysdata.

### Automatique (GitHub Actions)

Chaque push sur `master` lance [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) : build, envoi de `dist/` en SSH (rsync), puis vérification que le site répond. Un lancement manuel est possible depuis l'onglet **Actions**, avec l'option « clean » pour supprimer les vieux fichiers distants.

Secrets à créer dans **Settings → Environments → production** :

| Secret | Contenu |
|---|---|
| `DEPLOY_SSH_KEY` | Clé privée SSH dédiée au déploiement |
| `DEPLOY_KNOWN_HOSTS` | Sortie de `ssh-keyscan -t ed25519 ssh-<compte>.alwaysdata.net` |
| `DEPLOY_USER` | Compte alwaysdata |
| `DEPLOY_HOST` | `ssh-<compte>.alwaysdata.net` |
| `DEPLOY_PATH` | Dossier racine du site, ex. `/home/<compte>/www/` |

### Manuel (depuis son poste)

```bash
cp .env.deploy.example .env.deploy   # une seule fois, puis le remplir
npm run deploy                        # build, aperçu, confirmation, envoi
npm run deploy -- --clean             # idem + supprime les vieux fichiers distants
```
