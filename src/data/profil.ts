export const profil = {
  firstName: 'Yanis',
  lastName: 'Fortier',
  title: {
    fr: 'Consultant DevSecOps Senior',
    en: 'Senior DevSecOps Consultant',
    ko: '시니어 DevSecOps 컨설턴트',
  },
  employer: 'WeScale',
  photo: '/img/profile.jpg',
  email: 'yanis.fortier@gmail.com',
  phone: '06 33 50 86 14',
  linkedin: 'https://www.linkedin.com/in/yanis-fortier/',
  github: 'https://github.com/YanisFortier',
  /** Phrase d'accroche de la page d'accueil */
  lead: {
    fr: "J'industrialise et je sécurise des plateformes Cloud pour le secteur public, de la chaîne CI/CD jusqu'à l'infrastructure, en France comme à l'étranger.",
    en: 'I build and secure cloud platforms for the public sector, from CI/CD pipelines to infrastructure, in France and abroad.',
    ko: 'CI/CD 파이프라인부터 인프라까지, 공공 부문을 위한 클라우드 플랫폼을 구축하고 보안을 강화합니다. 프랑스와 해외에서 경험을 쌓았습니다.',
  },
  /** Bande de chiffres clés sous l'accroche */
  facts: [
    {
      label: { fr: 'Actuellement', en: 'Currently', ko: '현재' },
      value: { fr: 'WeScale', en: 'WeScale', ko: 'WeScale' },
    },
    {
      label: { fr: 'Mission', en: 'Engagement', ko: '프로젝트' },
      value: { fr: 'Cloud & IA souveraine', en: 'Sovereign Cloud & AI', ko: '소버린 클라우드 & AI' },
    },
    {
      label: { fr: 'Expérience', en: 'Experience', ko: '경력' },
      value: { fr: 'Depuis 2019', en: 'Since 2019', ko: '2019년부터' },
    },
  ],
  cv: {
    fr: '/CV_FORTIER_Yanis_2025.pdf',
    en: '/CV_FORTIER_Yanis_2025_English.pdf',
  },
  /** Texte des aperçus de partage (LinkedIn, Slack…) */
  description: {
    fr: 'Yanis Fortier, consultant DevSecOps senior chez WeScale : plateformes Cloud sécurisées, CI/CD et Infrastructure as Code pour le secteur public.',
    en: 'Yanis Fortier, Senior DevSecOps Consultant at WeScale: secure cloud platforms, CI/CD and Infrastructure as Code for the public sector.',
    ko: 'Yanis Fortier — WeScale 시니어 DevSecOps 컨설턴트. 공공 부문을 위한 보안 클라우드 플랫폼, CI/CD, IaC(Infrastructure as Code) 전문.',
  },
} as const;
