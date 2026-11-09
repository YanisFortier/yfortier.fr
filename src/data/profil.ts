export const profil = {
  firstName: 'Yanis',
  lastName: 'Fortier',
  title: 'Ingénieur DevSecOps',
  employer: 'WeScale',
  photo: '/img/profile.jpg',
  email: 'yanis.fortier@gmail.com',
  phone: '06 33 50 86 14',
  linkedin: 'https://www.linkedin.com/in/yanis-fortier/',
  github: 'https://github.com/YanisFortier',
  /** Phrase d'accroche de la page d'accueil */
  lead:
    "J'industrialise et je sécurise des plateformes Cloud pour le secteur public, de la chaîne CI/CD jusqu'à l'infrastructure, en France comme à l'étranger.",
  /** Bande de chiffres clés sous l'accroche */
  facts: [
    { label: 'Actuellement', value: 'WeScale' },
    { label: 'Mission', value: 'Cloud & IA souveraine' },
    { label: 'Expérience', value: 'Depuis 2019' },
  ],
  cv: {
    fr: '/CV_FORTIER_Yanis_2025.pdf',
    en: '/CV_FORTIER_Yanis_2025_English.pdf',
  },
  /** Texte des aperçus de partage (LinkedIn, Slack…) */
  description:
    'Yanis Fortier, ingénieur DevSecOps chez WeScale : plateformes Cloud sécurisées, CI/CD et Infrastructure as Code pour le secteur public.',
} as const;
