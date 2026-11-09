import type { L } from '../i18n/ui';
import type { Group } from './types';

export const competences: Group[] = [
  {
    title: { fr: 'Cloud & DevSecOps', en: 'Cloud & DevSecOps', ko: '클라우드 & DevSecOps' },
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
    title: { fr: 'Langages de programmation', en: 'Programming languages', ko: '프로그래밍 언어' },
    items: ['Java', 'Python', 'JavaScript', 'PHP', 'C++', 'HTML5', 'CSS3'],
  },
  {
    title: { fr: 'Logiciels', en: 'Software', ko: '소프트웨어' },
    items: ['MySQL', 'Apache', 'WordPress', 'Photoshop', 'Ubuntu', 'Windows'],
  },
  {
    title: { fr: 'Méthodes', en: 'Methods', ko: '방법론' },
    items: {
      fr: ['Méthodes agiles', 'Réalisation de sites web', 'Rédaction de cahier des charges', 'Conception UML', 'UX/UI'],
      en: ['Agile methods', 'Website development', 'Writing specifications', 'UML design', 'UX/UI'],
      ko: ['애자일 방법론', '웹사이트 제작', '요구사항 명세서 작성', 'UML 설계', 'UX/UI'],
    },
  },
];

export const langues: { flag: string; name: L<string>; level: L<string> }[] = [
  {
    flag: '🇫🇷',
    name: { fr: 'Français', en: 'French', ko: '프랑스어' },
    level: { fr: 'Langue maternelle', en: 'Native', ko: '모국어' },
  },
  {
    flag: '🇬🇧',
    name: { fr: 'Anglais', en: 'English', ko: '영어' },
    level: { fr: '985 TOEIC', en: 'TOEIC 985', ko: 'TOEIC 985' },
  },
  { flag: '🇩🇪', name: { fr: 'Allemand', en: 'German', ko: '독일어' }, level: { fr: 'B2', en: 'B2', ko: 'B2' } },
  { flag: '🇮🇹', name: { fr: 'Italien', en: 'Italian', ko: '이탈리아어' }, level: { fr: 'B1', en: 'B1', ko: 'B1' } },
  { flag: '🇨🇳', name: { fr: 'Chinois', en: 'Chinese', ko: '중국어' }, level: { fr: 'A1', en: 'A1', ko: 'A1' } },
  {
    flag: '🤟',
    name: { fr: 'Langue des signes française', en: 'French Sign Language', ko: '프랑스 수어' },
    level: { fr: 'A1', en: 'A1', ko: 'A1' },
  },
];
