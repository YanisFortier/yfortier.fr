// Génère les CV PDF (FR, EN, KO) à partir des pages /cv/<lang>/ du site.
//
//   npm run cv
//
// 1. construit le site (astro build)
// 2. le sert en local (astro preview, port 4329)
// 3. imprime chaque page en PDF A4 avec Chrome sans interface (profil temporaire)
// 4. écrit public/cv/Yanis-Fortier-CV-<LANG>.pdf
//    + copies FR/EN sous les anciens noms, pour ne pas casser les liens déjà partagés
//
// Chrome : chemin macOS par défaut, ou variable d'environnement CHROME_PATH.
import { spawn, execFileSync } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, readFile, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(root, 'public', 'cv');
const PORT = 4329;
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const LANGS = ['fr', 'en', 'ko'];
const LEGACY = { fr: 'CV_FORTIER_Yanis_2025.pdf', en: 'CV_FORTIER_Yanis_2025_English.pdf' };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Chrome en mode headless écrit le PDF mais ne rend pas toujours la main sur macOS :
 * on attend que le fichier soit complet (%%EOF), puis on arrête Chrome nous-mêmes.
 */
async function printPdf(url, file, profileDir) {
  await rm(file, { force: true });
  const chrome = spawn(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      `--user-data-dir=${profileDir}`,
      '--no-pdf-header-footer',
      '--virtual-time-budget=10000', // laisse le temps aux polices de se charger
      `--print-to-pdf=${file}`,
      url,
    ],
    { stdio: 'ignore', detached: true },
  );
  const kill = () => {
    try {
      process.kill(-chrome.pid);
    } catch {}
  };
  try {
    for (let i = 0; i < 120; i++) {
      await sleep(500);
      try {
        const buf = await readFile(file);
        if (buf.length > 1000 && buf.subarray(-32).toString('latin1').includes('%%EOF')) return;
      } catch {}
    }
    throw new Error(`Chrome n'a pas produit ${file} en 60 s`);
  } finally {
    kill();
    await sleep(300);
  }
}

console.log('→ Build du site');
execFileSync('npx', ['astro', 'build', '--silent'], { cwd: root, stdio: 'inherit' });

console.log(`→ Serveur local sur le port ${PORT}`);
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT), '--host', '127.0.0.1'], {
  cwd: root,
  stdio: 'ignore',
  detached: true,
});
const stopServer = () => {
  try {
    process.kill(-server.pid);
  } catch {}
};
process.on('exit', stopServer);

const profile = await mkdtemp(join(tmpdir(), 'cv-chrome-'));
try {
  // Attendre que le serveur réponde
  for (let i = 0; ; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/cv/fr/`);
      if (res.ok) break;
    } catch {}
    if (i > 60) throw new Error('Le serveur de prévisualisation ne répond pas');
    await sleep(500);
  }

  await mkdir(OUT, { recursive: true });
  for (const lang of LANGS) {
    const file = join(OUT, `Yanis-Fortier-CV-${lang.toUpperCase()}.pdf`);
    await printPdf(`http://127.0.0.1:${PORT}/cv/${lang}/`, file, profile);
    const { size } = await stat(file);
    console.log(`✓ ${lang.toUpperCase()}  ${file.replace(root, '')}  (${Math.round(size / 1024)} Ko)`);
    if (LEGACY[lang]) await copyFile(file, join(root, 'public', LEGACY[lang]));
  }
} finally {
  stopServer();
  await rm(profile, { recursive: true, force: true });
}
