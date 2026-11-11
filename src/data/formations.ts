import type { Formation } from './types';

/** Titres de colonnes réutilisés */
const t = {
  tech: { fr: 'Compétences techniques', en: 'Technical skills', ko: '기술 역량' },
  soft: { fr: 'Compétences transversales', en: 'Soft skills', ko: '소프트 스킬' },
  asso: { fr: 'Engagement associatif', en: 'Student involvement', ko: '학생 활동' },
  projets: { fr: 'Projets réalisés', en: 'Projects', ko: '주요 프로젝트' },
};

/** De la plus récente à la plus ancienne */
export const formations: Formation[] = [
  {
    school: { fr: 'ESAIP — Angers', en: 'ESAIP — Angers', ko: 'ESAIP — 앙제' },
    start: 2018,
    end: 2021,
    degree: {
      fr: 'Ingénieur — Informatique et réseaux',
      en: 'Master of Engineering — Computer Science & Networks',
      ko: '공학 석사(Diplôme d’ingénieur) — 컴퓨터공학 및 네트워크',
    },
    logo: 'esaip',
    groups: [
      {
        title: t.tech,
        items: {
          fr: ['Certification CCNA (Routing & Switching)', 'Développement Java / PHP', 'JavaScript & frameworks web', 'Architecture réseau'],
          en: ['CCNA certification (Routing & Switching)', 'Java / PHP development', 'JavaScript & web frameworks', 'Network architecture'],
          ko: ['CCNA 자격증(라우팅 & 스위칭)', 'Java / PHP 개발', 'JavaScript 및 웹 프레임워크', '네트워크 아키텍처'],
        },
      },
      {
        title: t.soft,
        items: {
          fr: ['Gestion de projet Agile / Scrum', 'Gestion financière de projet', "Management d'équipe", 'Leadership et communication'],
          en: ['Agile / Scrum project management', 'Project financial management', 'Team management', 'Leadership and communication'],
          ko: ['애자일/스크럼 프로젝트 관리', '프로젝트 재무 관리', '팀 관리', '리더십 및 커뮤니케이션'],
        },
      },
      {
        title: t.asso,
        items: {
          fr: ['Responsable Communication — Bureau des Arts', 'Tuteur en informatique', "Organisation d'événements culturels"],
          en: ['Head of Communications — Arts Society', 'Computer science tutor', 'Organizing cultural events'],
          ko: ['예술 동아리 홍보 담당', '컴퓨터 과목 튜터', '문화 행사 기획'],
        },
      },
    ],
    exchanges: [
      {
        flag: '🇩🇪',
        school: { fr: 'Hochschule Esslingen', en: 'Esslingen University', ko: '에슬링겐 응용과학대학교' },
        country: { fr: 'Allemagne', en: 'Germany', ko: '독일' },
        period: { fr: 'Semestre 2021', en: 'Semester 2021', ko: '2021년 교환학기' },
        groups: [
          {
            title: t.tech,
            items: {
              fr: ['IoT & systèmes embarqués', 'Solutions bancaires & assurance', 'Développement mobile Android', 'Allemand professionnel (B1)'],
              en: ['IoT & embedded systems', 'Banking & insurance solutions', 'Android mobile development', 'Professional German (B1)'],
              ko: ['IoT 및 임베디드 시스템', '은행·보험 솔루션', 'Android 모바일 개발', '비즈니스 독일어(B1)'],
            },
          },
          {
            title: t.projets,
            items: {
              fr: ["Application Android : protection du patrimoine naturel de l'Anjou", 'Plateforme de recensement des festivals culturels en France'],
              en: ['Android app protecting the natural heritage of Anjou', 'Platform listing cultural festivals in France'],
              ko: ['안드로이드 앱: 앙주 지역 자연유산 보호', '프랑스 문화 축제 정보 플랫폼'],
            },
          },
        ],
      },
      {
        flag: '🇨🇳',
        school: { fr: 'Tianjin Polytechnic University', en: 'Tianjin Polytechnic University', ko: '톈진공업대학교' },
        country: { fr: 'Chine', en: 'China', ko: '중국' },
        period: { fr: 'Semestre 2019', en: 'Semester 2019', ko: '2019년 교환학기' },
        groups: [
          {
            title: t.tech,
            items: {
              fr: [
                'Administration Linux avancée',
                'Bases de données avancées (SQL/NoSQL)',
                'Algorithmes & structures de données',
                'Intelligence Artificielle & Machine Learning',
                'Chinois mandarin (A1)',
              ],
              en: [
                'Advanced Linux administration',
                'Advanced databases (SQL/NoSQL)',
                'Algorithms & data structures',
                'Artificial Intelligence & Machine Learning',
                'Mandarin Chinese (A1)',
              ],
              ko: ['고급 리눅스 관리', '고급 데이터베이스(SQL/NoSQL)', '알고리즘 및 자료구조', '인공지능 및 머신러닝', '중국어(A1)'],
            },
          },
          {
            title: t.projets,
            items: {
              fr: ['IA LLM culinaire : génération de recettes (Python, TensorFlow, RNN/LSTM)', "Application web d'analyse de consommation électrique"],
              en: ['Culinary AI: recipe generation (Python, TensorFlow, RNN/LSTM)', 'Web app analysing electricity consumption'],
              ko: ['요리 AI: 레시피 생성(Python, TensorFlow, RNN/LSTM)', '전력 소비 분석 웹 애플리케이션'],
            },
          },
        ],
      },
    ],
  },
  {
    school: { fr: "Université d'Angers", en: 'University of Angers', ko: '앙제 대학교' },
    start: 2017,
    end: 2018,
    degree: {
      fr: 'UFR Sciences — Licence en informatique',
      en: 'Faculty of Science — Bachelor’s programme in Computer Science',
      ko: '이과대학 — 컴퓨터공학 학사 과정',
    },
    logo: 'univ-angers',
    groups: [
      {
        title: t.tech,
        items: {
          fr: [
            'Programmation orientée objet (Java)',
            'Développement web (PHP, JavaScript)',
            'Bases de données (SQL, PostgreSQL & MySQL)',
            'Langages de balisage (XML, LaTeX)',
            'Algorithmique & structures de données',
          ],
          en: [
            'Object-oriented programming (Java)',
            'Web development (PHP, JavaScript)',
            'Databases (SQL, PostgreSQL & MySQL)',
            'Markup languages (XML, LaTeX)',
            'Algorithms & data structures',
          ],
          ko: ['객체지향 프로그래밍(Java)', '웹 개발(PHP, JavaScript)', '데이터베이스(SQL, PostgreSQL & MySQL)', '마크업 언어(XML, LaTeX)', '알고리즘 및 자료구조'],
        },
      },
      {
        title: t.asso,
        items: {
          fr: ['Chargé de missions — BDE UFR Sciences', 'Enseignant bénévole — Langue des Signes Française (LSF)', "Organisation d'événements étudiants"],
          en: ['Project officer — Faculty of Science student union', 'Volunteer teacher — French Sign Language (LSF)', 'Organizing student events'],
          ko: ['이과대학 학생회 기획 담당', '프랑스 수어(LSF) 자원봉사 강사', '학생 행사 기획'],
        },
      },
    ],
  },
  {
    school: { fr: 'Université François Rabelais — Tours', en: 'François Rabelais University — Tours', ko: '프랑수아 라블레 대학교 — 투르' },
    start: 2015,
    end: 2017,
    degree: {
      fr: 'DUT — Génie Électrique et Informatique Industrielle',
      en: 'Two-year technical degree (DUT) — Electrical Engineering & Industrial Computing',
      ko: '2년제 기술학위(DUT) — 전기공학 및 산업전산',
    },
    logo: 'univ-tours',
    groups: [
      {
        title: t.tech,
        items: {
          fr: [
            'Programmation bas niveau (C++, VHDL)',
            'Automatisme industriel (Ladder)',
            'Systèmes embarqués (Arduino, Raspberry Pi, ARM)',
            'Électronique & électrotechnique',
            'Habilitations électriques (B1V-B2V, BS, BC)',
          ],
          en: [
            'Low-level programming (C++, VHDL)',
            'Industrial automation (Ladder)',
            'Embedded systems (Arduino, Raspberry Pi, ARM)',
            'Electronics & electrical engineering',
            'Electrical safety certifications (B1V-B2V, BS, BC)',
          ],
          ko: [
            '저수준 프로그래밍(C++, VHDL)',
            '산업 자동화(Ladder)',
            '임베디드 시스템(Arduino, Raspberry Pi, ARM)',
            '전자공학 및 전기공학',
            '전기 작업 자격(B1V-B2V, BS, BC)',
          ],
        },
      },
      {
        title: t.projets,
        items: {
          fr: [
            'Télémètre infrarouge portatif haute précision (portée 30 m)',
            'Station météorologique connectée (applications Android & Windows)',
            'Systèmes de mesure & acquisition de données',
          ],
          en: [
            'High-precision handheld infrared rangefinder (30 m range)',
            'Connected weather station (Android & Windows apps)',
            'Measurement & data acquisition systems',
          ],
          ko: ['고정밀 휴대용 적외선 거리 측정기(최대 30m)', 'IoT 기상 관측소(Android 및 Windows 앱)', '측정 및 데이터 수집 시스템'],
        },
      },
    ],
  },
  {
    school: { fr: 'Lycée Grandmont — Tours', en: 'Grandmont High School — Tours', ko: '그랑몽 고등학교 — 투르' },
    inCv: false,
    start: 2013,
    end: 2015,
    degree: {
      fr: "BAC STI2D — Option Système d'Information et Numérique",
      en: 'French Baccalaureate (STI2D) — Information & Digital Systems',
      ko: '프랑스 바칼로레아(STI2D) — 정보·디지털 시스템',
    },
    logo: 'lycee-grandmont',
    groups: [
      {
        title: t.tech,
        items: {
          fr: ['Programmation (C, Processing)', 'Systèmes numériques & réseaux', 'Analyse structurelle des matériaux', 'Domotique & automatisation'],
          en: ['Programming (C, Processing)', 'Digital systems & networks', 'Structural analysis of materials', 'Home automation'],
          ko: ['프로그래밍(C, Processing)', '디지털 시스템 및 네트워크', '재료 구조 분석', '홈 오토메이션'],
        },
      },
      {
        title: t.projets,
        items: {
          fr: [
            'Fenêtre intelligente autonome — domotique avec capteurs environnementaux (température, humidité, luminosité)',
            "Systèmes d'automatisation domestique",
          ],
          en: [
            'Autonomous smart window — home automation with environmental sensors (temperature, humidity, light)',
            'Home automation systems',
          ],
          ko: ['자율형 스마트 창문 — 환경 센서(온도·습도·조도)를 활용한 홈 오토메이션', '가정용 자동화 시스템'],
        },
      },
    ],
  },
];
