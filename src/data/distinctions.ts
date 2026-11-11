import type { L } from '../i18n/ui';

/** **gras** autorisé */
export const certifications: L<string[]> = {
  fr: [
    'Formation **Microsoft Azure AZ-900**',
    'Formation **CCNA** (1, 2, 3, 4) & Sécurité',
    'Certification **Google Digital Active**',
    'Formation **salle blanche** (ISO 7 & 8)',
    'Salarié sauveteur secouriste du travail (SST)',
    'Gestion de projet **Agile, Scrum, SAFe & Kanban**',
    '**Éco-conception** d’applications',
    '**Habilitation électrique** : B1V-B2V, BS, BE essai, BE Mesurage en BT et H0 en HTA',
  ],
  en: [
    '**Microsoft Azure AZ-900** training',
    '**CCNA** training (1, 2, 3, 4) & Security',
    '**Google Digital Active** certification',
    '**Cleanroom** training (ISO 7 & 8)',
    'Workplace first aid certificate (SST)',
    '**Agile, Scrum, SAFe & Kanban** project management',
    '**Eco-design** of applications',
    '**Electrical safety clearance**: B1V-B2V, BS, BE testing, BE low-voltage measurement and H0 high-voltage',
  ],
  ko: [
    '**Microsoft Azure AZ-900** 교육 이수',
    '**CCNA** 과정(1~4) 및 보안 교육 이수',
    '**Google Digital Active** 인증',
    '**클린룸** 교육(ISO 7 & 8)',
    '산업 응급처치 자격(SST)',
    '**애자일·스크럼·SAFe·칸반** 프로젝트 관리',
    '애플리케이션 **에코디자인**',
    '**전기 작업 자격**: B1V-B2V, BS, BE 시험, 저압 BE 측정, 고압 H0',
  ],
};

export const prix: { event: string; rank: L<string> }[] = [
  { event: 'Design4Green 2019', rank: { fr: '6ᵉ sur 56 équipes', en: '6th of 56 teams', ko: '56팀 중 6위' } },
  { event: "La Nuit de l'Info 2016", rank: { fr: '20ᵉ sur 486 équipes', en: '20th of 486 teams', ko: '486팀 중 20위' } },
];
