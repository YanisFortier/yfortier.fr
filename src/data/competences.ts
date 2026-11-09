import type { Group } from './types';

export const competences: Group[] = [
  {
    title: 'Cloud & DevSecOps',
    items: [
      'Kubernetes',
      'Docker',
      'Terraform',
      'Ansible',
      'GitLab CI/CD',
      'Jenkins',
      'SonarQube',
      'Veracode SAST',
      'Azure',
      'AWS',
      'Prometheus',
      'Grafana',
    ],
  },
  {
    title: 'Langages de programmation',
    items: ['Java', 'Python', 'JavaScript', 'PHP', 'C++', 'HTML5', 'CSS3'],
  },
  {
    title: 'Logiciels',
    items: ['MySQL', 'Apache', 'WordPress', 'Photoshop', 'Ubuntu', 'Windows'],
  },
  {
    title: 'Méthodes',
    items: [
      'Méthodes agiles',
      'Réalisation de sites web',
      'Rédaction de cahier des charges',
      'Conception UML',
      'UX/UI',
    ],
  },
];

export const langues = [
  { flag: '🇬🇧', name: 'Anglais', level: '985 TOEIC' },
  { flag: '🇩🇪', name: 'Allemand', level: 'B2' },
  { flag: '🇮🇹', name: 'Italien', level: 'B1' },
  { flag: '🇨🇳', name: 'Chinois', level: 'A1' },
  { flag: '🇫🇷', name: 'Langue des signes française', level: 'A1' },
];
