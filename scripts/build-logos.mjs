// Génère les logos standardisés du site à partir des fichiers d'origine.
//
//   npm run logos
//
// Sources : assets/logos/ (fichiers officiels, une version claire et une version sombre).
// Sortie  : public/img/logos/<id>-light.png et <id>-dark.png
//           → même format pour tous : 480 × 160 px (3:1), fond transparent,
//             marges blanches retirées, logo centré dans la zone utile.
//
// Pour ajouter un logo : déposer le fichier dans assets/logos/, ajouter une ligne
// dans LOGOS ci-dessous, relancer `npm run logos`, puis référencer `logo: '<id>'`
// dans src/data/experiences.ts ou formations.ts.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const SRC = `${root}assets/logos`;
const OUT = `${root}public/img/logos`;

const CANVAS = { width: 480, height: 160 };
const SAFE = { width: 456, height: 128 }; // zone utile (marges internes identiques pour tous)

/**
 * light / dark : fichier source pour chaque thème.
 * tint         : recolorie le fichier (silhouette) dans cette couleur.
 */
const LOGOS = [
  { id: 'wescale', light: 'wescale.png', dark: 'wescale-dark.png' },
  { id: 'accenture', light: 'accenture.svg', dark: 'accenture-dark.svg' },
  { id: 'horoquartz', light: 'horoquartz.png', dark: 'horoquartz-dark.png' },
  { id: 'sopra-steria', light: 'sopra-steria.svg', dark: 'sopra-steria-dark.svg' },
  { id: 'tjpu', light: 'tjpu.png', dark: 'tjpu.png' },
  // Version horizontale officielle (blanche) ; en clair, teintée dans le bleu ESAIP du logo couleur
  { id: 'esaip', light: { file: 'esaip-dark.png', tint: '#3878bd' }, dark: 'esaip-dark.png' },
  { id: 'univ-angers', light: 'univ-angers.png', dark: 'univ-angers-dark.png' },
  { id: 'univ-tours', light: 'univ-tours.svg', dark: 'univ-tours-dark.svg' },
  { id: 'lycee-grandmont', light: 'lycee-grandmont.svg', dark: 'lycee-grandmont.svg' },
];

const hexToRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
};

async function render(spec) {
  const { file, tint } = typeof spec === 'string' ? { file: spec } : spec;
  // Rendu haute définition (SVG rastérisés à 600 dpi), puis rognage des bords vides
  let img = sharp(`${SRC}/${file}`, { density: 600 }).ensureAlpha();
  let buf = await img.png().toBuffer();
  buf = await sharp(buf).trim({ threshold: 10 }).png().toBuffer();

  if (tint) {
    // Silhouette : on garde la transparence d'origine, on remplace la couleur
    const { width, height } = await sharp(buf).metadata();
    const alpha = await sharp(buf).extractChannel('alpha').toBuffer();
    buf = await sharp({ create: { width, height, channels: 3, background: hexToRgb(tint) } })
      .joinChannel(alpha)
      .png()
      .toBuffer();
  }

  const fitted = await sharp(buf)
    .resize(SAFE.width, SAFE.height, { fit: 'inside', withoutEnlargement: false })
    .png()
    .toBuffer();
  const m = await sharp(fitted).metadata();

  return sharp({ create: { ...CANVAS, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: fitted, left: Math.round((CANVAS.width - m.width) / 2), top: Math.round((CANVAS.height - m.height) / 2) }])
    .png({ compressionLevel: 9, palette: true, quality: 90 });
}

await mkdir(OUT, { recursive: true });
for (const logo of LOGOS) {
  for (const theme of ['light', 'dark']) {
    const out = `${OUT}/${logo.id}-${theme}.png`;
    await (await render(logo[theme])).toFile(out);
  }
  console.log(`✓ ${logo.id}`);
}
