import type { Formation } from './types';

/** De la plus récente à la plus ancienne */
export const formations: Formation[] = [
  {
    school: 'ESAIP — Angers',
    dates: '2018 — 2021',
    degree: 'Ingénieur — Informatique et réseaux',
    logo: { src: '/img/esaip.jpg' },
    groups: [
      {
        title: 'Compétences techniques',
        items: ['Certification CCNA (Routing & Switching)', 'Développement Java / PHP', 'JavaScript & frameworks web', 'Architecture réseau'],
      },
      {
        title: 'Compétences transversales',
        items: ['Gestion de projet Agile / Scrum', 'Gestion financière de projet', "Management d'équipe", 'Leadership et communication'],
      },
      {
        title: 'Engagement associatif',
        items: ['Responsable Communication — Bureau des Arts', 'Tuteur en informatique', "Organisation d'événements culturels"],
      },
    ],
    exchanges: [
      {
        flag: '🇩🇪',
        school: 'Hochschule Esslingen',
        country: 'Allemagne',
        period: 'Semestre 2021',
        groups: [
          {
            title: 'Compétences techniques',
            items: ['IoT & systèmes embarqués', 'Solutions bancaires & assurance', 'Développement mobile Android', 'Allemand professionnel (B1)'],
          },
          {
            title: 'Projets réalisés',
            items: ["Application Android : protection du patrimoine naturel de l'Anjou", 'Plateforme de recensement des festivals culturels en France'],
          },
        ],
      },
      {
        flag: '🇨🇳',
        school: 'Tianjin Polytechnic University',
        country: 'Chine',
        period: 'Semestre 2019',
        groups: [
          {
            title: 'Compétences techniques',
            items: [
              'Administration Linux avancée',
              'Bases de données avancées (SQL/NoSQL)',
              'Algorithmes & structures de données',
              'Intelligence Artificielle & Machine Learning',
              'Chinois mandarin (A1)',
            ],
          },
          {
            title: 'Projets réalisés',
            items: ['IA LLM culinaire : génération de recettes (Python, TensorFlow, RNN/LSTM)', "Application web d'analyse de consommation électrique"],
          },
        ],
      },
    ],
  },
  {
    school: "Université d'Angers",
    dates: '2017 — 2018',
    degree: 'UFR Sciences — Licence en informatique',
    logo: { src: '/img/angers.jpg' },
    groups: [
      {
        title: 'Compétences techniques',
        items: [
          'Programmation orientée objet (Java)',
          'Développement web (PHP, JavaScript)',
          'Bases de données (SQL, PostgreSQL & MySQL)',
          'Langages de balisage (XML, LaTeX)',
          'Algorithmique & structures de données',
        ],
      },
      {
        title: 'Engagement associatif',
        items: ['Chargé de missions — BDE UFR Sciences', 'Enseignant bénévole — Langue des Signes Française (LSF)', "Organisation d'événements étudiants"],
      },
    ],
  },
  {
    school: 'Université François Rabelais — Tours',
    dates: '2015 — 2017',
    degree: 'DUT — Génie Électrique et Informatique Industrielle',
    logo: { src: '/img/geii.jpg' },
    groups: [
      {
        title: 'Compétences techniques',
        items: [
          'Programmation bas niveau (C++, VHDL)',
          'Automatisme industriel (Ladder)',
          'Systèmes embarqués (Arduino, Raspberry Pi, ARM)',
          'Électronique & électrotechnique',
          'Habilitations électriques (B1V-B2V, BS, BC)',
        ],
      },
      {
        title: 'Projets réalisés',
        items: [
          'Télémètre infrarouge portatif haute précision (portée 30 m)',
          'Station météorologique connectée (applications Android & Windows)',
          'Systèmes de mesure & acquisition de données',
        ],
      },
    ],
  },
  {
    school: 'Lycée Grandmont — Tours',
    dates: '2013 — 2015',
    degree: "BAC STI2D — Option Système d'Information et Numérique",
    logo: { src: '/img/grandmont.jpg' },
    groups: [
      {
        title: 'Compétences techniques',
        items: ['Programmation (C, Processing)', 'Systèmes numériques & réseaux', 'Analyse structurelle des matériaux', 'Domotique & automatisation'],
      },
      {
        title: 'Projets réalisés',
        items: [
          'Fenêtre intelligente autonome — domotique avec capteurs environnementaux (température, humidité, luminosité)',
          "Systèmes d'automatisation domestique",
        ],
      },
    ],
  },
];
