export const locales = ['fr', 'en', 'ko'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

/** Valeur traduite dans les 3 langues */
export type L<T> = Record<Locale, T>;
/** Valeur identique partout, ou traduite */
export type Tr<T> = T | L<T>;

const isLocalized = <T,>(v: Tr<T>): v is L<T> =>
  typeof v === 'object' && v !== null && !Array.isArray(v) && 'fr' in v && 'en' in v && 'ko' in v;

/** Choisit la bonne langue d'un champ des fichiers de données */
export const tr = <T,>(v: Tr<T>, locale: Locale): T => (isLocalized(v) ? v[locale] : v);

export const languages: Record<Locale, { name: string; flag: string; htmlLang: string; ogLocale: string; path: string }> = {
  fr: { name: 'Français', flag: '🇫🇷', htmlLang: 'fr', ogLocale: 'fr_FR', path: '/' },
  en: { name: 'English', flag: '🇬🇧', htmlLang: 'en', ogLocale: 'en_GB', path: '/en/' },
  ko: { name: '한국어', flag: '🇰🇷', htmlLang: 'ko', ogLocale: 'ko_KR', path: '/ko/' },
};

export const ui = {
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    navMain: 'Navigation principale',
    navMobile: 'Navigation principale (mobile)',
    langSwitch: 'Choisir la langue',
    portrait: (name: string) => `Portrait de ${name}`,
    sections: {
      accueil: 'Accueil',
      experiences: 'Expériences',
      formations: 'Formations',
      competences: 'Compétences',
      engagements: 'Engagements',
      distinctions: 'Prix & certifications',
    },
    eyebrows: {
      experiences: 'Parcours',
      formations: 'Études',
      competences: 'Savoir-faire',
      engagements: 'Au-delà du travail',
      distinctions: 'Reconnaissance',
    },
    present: "aujourd'hui",
    mission: 'Mission :',
    missions: 'Missions :',
    stack: 'Stack technique',
    exchanges: 'Échanges universitaires internationaux',
    languages: 'Langues',
    values: 'Mes valeurs',
    valuesPlus: 'Valeurs',
    valuesMinus: 'Anti-valeurs',
    certifications: 'Certifications & formations',
    awards: 'Prix',
    contact: 'Me contacter',
    pdf: '(PDF)',
    cv: [
      { lang: 'fr', label: 'CV en français' },
      { lang: 'en', label: 'Resume in English' },
    ],
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    navMain: 'Main navigation',
    navMobile: 'Main navigation (mobile)',
    langSwitch: 'Choose language',
    portrait: (name: string) => `Portrait of ${name}`,
    sections: {
      accueil: 'Home',
      experiences: 'Experience',
      formations: 'Education',
      competences: 'Skills',
      engagements: 'Involvement',
      distinctions: 'Awards & certifications',
    },
    eyebrows: {
      experiences: 'Career',
      formations: 'Studies',
      competences: 'Expertise',
      engagements: 'Beyond work',
      distinctions: 'Recognition',
    },
    present: 'present',
    mission: 'Client:',
    missions: 'Clients:',
    stack: 'Tech stack',
    exchanges: 'International university exchanges',
    languages: 'Languages',
    values: 'My values',
    valuesPlus: 'Values',
    valuesMinus: 'Anti-values',
    certifications: 'Certifications & training',
    awards: 'Awards',
    contact: 'Contact me',
    pdf: '(PDF)',
    cv: [
      { lang: 'en', label: 'Resume in English' },
      { lang: 'fr', label: 'CV in French' },
    ],
  },
  ko: {
    skip: '본문 바로가기',
    menu: '메뉴',
    navMain: '주요 메뉴',
    navMobile: '주요 메뉴 (모바일)',
    langSwitch: '언어 선택',
    portrait: (name: string) => `${name} 프로필 사진`,
    sections: {
      accueil: '홈',
      experiences: '경력',
      formations: '학력',
      competences: '역량',
      engagements: '대외활동',
      distinctions: '수상 및 자격',
    },
    eyebrows: {
      experiences: '커리어',
      formations: '학업',
      competences: '전문성',
      engagements: '업무 외 활동',
      distinctions: '수상 · 인증',
    },
    present: '현재',
    mission: '고객사:',
    missions: '고객사:',
    stack: '기술 스택',
    exchanges: '해외 교환학생',
    languages: '언어',
    values: '나의 가치관',
    valuesPlus: '중요하게 여기는 것',
    valuesMinus: '지양하는 것',
    certifications: '자격 및 교육',
    awards: '수상',
    contact: '연락하기',
    pdf: '(PDF)',
    cv: [
      { lang: 'en', label: '영문 이력서' },
      { lang: 'fr', label: '프랑스어 이력서' },
    ],
  },
} satisfies Record<Locale, unknown>;

export type UI = (typeof ui)['fr'];

/** « 2021 — 2022 », « 2025 — aujourd'hui », « 2019 » */
export const period = (start: number, end: number | null | undefined, locale: Locale) =>
  end === undefined || end === start ? String(start) : `${start} — ${end === null ? ui[locale].present : end}`;
