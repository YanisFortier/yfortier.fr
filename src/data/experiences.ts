import type { Experience } from './types';

/** De la plus récente à la plus ancienne */
export const experiences: Experience[] = [
  {
    company: 'WeScale',
    dates: "2025 — aujourd'hui",
    logo: { src: '/img/logo_wescale.png' },
    roles: [
      {
        title: 'DevSecOps — Mission Cloud & IA souveraine',
        missions: ["Ministère de l'Intérieur"],
        points: [
          "Conception et sécurisation d'une plateforme Cloud souveraine pour héberger des services d'Intelligence Artificielle",
          'Intégration de la sécurité dans les pipelines CI/CD et automatisation des contrôles de conformité',
          "Déploiement d'infrastructures via Infrastructure as Code et orchestration de workloads conteneurisés",
          'Accompagnement des équipes sur les bonnes pratiques DevSecOps et la maîtrise des données sensibles',
        ],
        stack: ['Kubernetes', 'Docker', 'Terraform', 'Ansible', 'GitLab CI/CD', 'Cloud souverain'],
      },
    ],
  },
  {
    company: 'Accenture',
    dates: '2024 — 2025',
    logo: { src: '/img/logo_accenture.svg' },
    roles: [
      {
        title: 'Senior DevSecOps',
        missions: ['Ministère de la Justice', 'Ministère du Travail'],
        points: [
          'Automatisation de la sécurité dans les pipelines CI/CD avec analyse de code statique (SAST), tests de sécurité dynamiques (DAST) et gestion des vulnérabilités',
          "Implémentation de l'approche « Shift-Left Security » pour détecter et corriger les failles dès les phases de développement",
          "Orchestration d'infrastructures cloud sécurisées (Azure/AWS) via Infrastructure as Code (Terraform, Ansible)",
          "Promotion d'une culture DevSecOps à travers la formation des équipes et l'établissement de bonnes pratiques",
        ],
        stack: ['Jenkins', 'SonarQube', 'Veracode SAST', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'Terraform', 'Ansible'],
      },
    ],
  },
  {
    company: 'Horoquartz',
    dates: '2022 — 2024',
    logo: { src: '/img/logo_horoquartz.png' },
    roles: [
      {
        title: 'Scrum Master & DevSecOps',
        points: [
          "Animation des rituels Agile/Scrum et accompagnement de l'équipe DevOps vers l'amélioration continue",
          "Optimisation des workflows CI/CD et réduction du time-to-market grâce à l'automatisation",
          'Facilitation de la collaboration entre équipes Dev, Ops et Sécurité pour garantir la qualité et la performance',
        ],
        stack: ['Jira / Agile', 'Jenkins', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Azure'],
      },
      {
        title: 'Ingénieur DevOps',
        points: [
          'Conception et industrialisation de pipelines CI/CD pour accélérer les cycles de déploiement',
          'Administration cloud (Azure) et supervision des infrastructures avec monitoring temps réel (Prometheus, Grafana)',
          'Automatisation du provisioning et de la configuration via Infrastructure as Code (Terraform, Ansible)',
        ],
        stack: ['Git / GitLab', 'Jenkins', 'Prometheus', 'Grafana', 'Terraform', 'Ansible'],
      },
    ],
  },
  {
    company: 'Sopra Steria',
    dates: '2021 — 2022',
    logo: { src: '/img/sopra.png' },
    roles: [
      {
        title: 'Développeur Full Stack Java & Angular',
        missions: ['Ministère de la Justice'],
        points: [
          "Développement d'applications web full stack avec architecture multi-tiers (Java Spring Boot, Angular)",
          'Migration technique majeure : modernisation de Java 8 vers Java 17 et refonte frontend avec Angular',
          'Mise en place de tests automatisés (unitaires, intégration) pour garantir la qualité du code',
          'Intégration en méthodologie Agile avec livraisons itératives et amélioration continue',
        ],
        stack: ['Java 8 → 17', 'Spring Boot', 'Angular', 'React', 'Git / GitLab', 'Jenkins', 'Jira / Agile'],
      },
    ],
  },
  {
    company: 'Tianjin Polytechnic University',
    flag: '🇨🇳',
    dates: '2019',
    logo: { src: '/img/logo_tjpu.png', background: '#003ea8' },
    roles: [
      {
        title: 'Projet de recherche — Intelligence Artificielle culinaire',
        points: [
          "Développement d'un modèle d'IA de génération de textes de recettes basé sur les réseaux de neurones récurrents (RNN/LSTM) avec TensorFlow",
          "Création d'un dataset d'entraînement de plus de 10 000 recettes via web scraping automatisé",
          "Conception d'une interface web permettant la génération interactive de recettes personnalisées",
          '**En 2019 !**',
        ],
        stack: ['Python 3', 'TensorFlow', 'RNN / LSTM', 'Flask', 'BeautifulSoup', 'HTML / CSS / JS'],
      },
    ],
  },
];
