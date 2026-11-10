import type { Experience } from './types';

const ministere = {
  interieur: { fr: "Ministère de l'Intérieur", en: 'French Ministry of the Interior', ko: '프랑스 내무부' },
  justice: { fr: 'Ministère de la Justice', en: 'French Ministry of Justice', ko: '프랑스 법무부' },
  travail: { fr: 'Ministère du Travail', en: 'French Ministry of Labour', ko: '프랑스 노동부' },
};

/** De la plus récente à la plus ancienne */
export const experiences: Experience[] = [
  {
    company: 'WeScale',
    start: 2025,
    end: null,
    logo: 'wescale',
    roles: [
      {
        title: { fr: 'Consultant DevSecOps Senior', en: 'Senior DevSecOps Consultant', ko: '시니어 DevSecOps 컨설턴트' },
        missions: {
          fr: [`${ministere.interieur.fr} · Cloud & IA souveraine`],
          en: [`${ministere.interieur.en} · Sovereign Cloud & AI`],
          ko: [`${ministere.interieur.ko} · 소버린 클라우드 & AI`],
        },
        points: {
          fr: [
            "Conception et sécurisation d'une plateforme Cloud souveraine pour héberger des services d'Intelligence Artificielle",
            'Intégration de la sécurité dans les pipelines CI/CD et automatisation des contrôles de conformité',
            "Déploiement d'infrastructures via Infrastructure as Code et orchestration de workloads conteneurisés",
            'Accompagnement des équipes sur les bonnes pratiques DevSecOps et la maîtrise des données sensibles',
          ],
          en: [
            'Designed and secured a sovereign cloud platform hosting Artificial Intelligence services',
            'Built security into CI/CD pipelines and automated compliance checks',
            'Deployed infrastructure with Infrastructure as Code and orchestrated containerized workloads',
            'Coached teams on DevSecOps best practices and the handling of sensitive data',
          ],
          ko: [
            'AI 서비스 운영을 위한 소버린 클라우드 플랫폼 설계 및 보안 강화',
            'CI/CD 파이프라인 보안 통합 및 컴플라이언스 검사 자동화',
            'IaC(Infrastructure as Code) 기반 인프라 배포 및 컨테이너 워크로드 오케스트레이션',
            'DevSecOps 모범 사례 및 민감 데이터 관리에 대한 팀 코칭',
          ],
        },
        stack: [
          'Kubernetes',
          'Docker',
          'Terraform',
          'Ansible',
          'GitLab CI/CD',
          { fr: 'Cloud souverain', en: 'Sovereign cloud', ko: '소버린 클라우드' },
        ],
      },
    ],
  },
  {
    company: 'Accenture',
    start: 2024,
    end: 2025,
    logo: 'accenture',
    roles: [
      {
        title: { fr: 'Consultant DevSecOps Senior', en: 'Senior DevSecOps Consultant', ko: '시니어 DevSecOps 컨설턴트' },
        missions: {
          fr: [ministere.justice.fr, ministere.travail.fr],
          en: [ministere.justice.en, ministere.travail.en],
          ko: [ministere.justice.ko, ministere.travail.ko],
        },
        points: {
          fr: [
            'Automatisation de la sécurité dans les pipelines CI/CD avec analyse de code statique (SAST), tests de sécurité dynamiques (DAST) et gestion des vulnérabilités',
            "Implémentation de l'approche « Shift-Left Security » pour détecter et corriger les failles dès les phases de développement",
            "Orchestration d'infrastructures cloud sécurisées (Azure/AWS) via Infrastructure as Code (Terraform, Ansible)",
            "Promotion d'une culture DevSecOps à travers la formation des équipes et l'établissement de bonnes pratiques",
          ],
          en: [
            'Automated security in CI/CD pipelines with static code analysis (SAST), dynamic security testing (DAST) and vulnerability management',
            'Implemented a “Shift-Left Security” approach to detect and fix flaws early in development',
            'Orchestrated secure cloud infrastructure (Azure/AWS) with Infrastructure as Code (Terraform, Ansible)',
            'Promoted a DevSecOps culture through team training and shared best practices',
          ],
          ko: [
            '정적 코드 분석(SAST), 동적 보안 테스트(DAST), 취약점 관리를 통한 CI/CD 파이프라인 보안 자동화',
            '개발 초기 단계에서 취약점을 탐지·수정하는 ‘시프트 레프트(Shift-Left) 보안’ 도입',
            'IaC(Terraform, Ansible)를 활용한 보안 클라우드 인프라(Azure/AWS) 구축 및 운영',
            '팀 교육과 모범 사례 수립을 통한 DevSecOps 문화 확산',
          ],
        },
        stack: ['Jenkins', 'SonarQube', 'Veracode SAST', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'Terraform', 'Ansible'],
      },
    ],
  },
  {
    company: 'Horoquartz',
    start: 2022,
    end: 2024,
    logo: 'horoquartz',
    roles: [
      {
        title: { fr: 'Scrum Master & DevSecOps', en: 'Scrum Master & DevSecOps', ko: '스크럼 마스터 & DevSecOps' },
        points: {
          fr: [
            "Animation des rituels Agile/Scrum et accompagnement de l'équipe DevOps vers l'amélioration continue",
            "Optimisation des workflows CI/CD et réduction du time-to-market grâce à l'automatisation",
            'Facilitation de la collaboration entre équipes Dev, Ops et Sécurité pour garantir la qualité et la performance',
          ],
          en: [
            'Facilitated Agile/Scrum ceremonies and guided the DevOps team toward continuous improvement',
            'Optimized CI/CD workflows and reduced time-to-market through automation',
            'Fostered collaboration between Dev, Ops and Security teams to ensure quality and performance',
          ],
          ko: [
            '애자일/스크럼 이벤트 진행 및 DevOps 팀의 지속적 개선 지원',
            '자동화를 통한 CI/CD 워크플로 최적화 및 출시 기간 단축',
            '품질과 성능 확보를 위한 개발·운영·보안 팀 간 협업 촉진',
          ],
        },
        stack: ['Jira / Agile', 'Jenkins', 'GitLab CI/CD', 'Docker', 'Kubernetes', 'Azure'],
      },
      {
        title: { fr: 'Ingénieur DevOps', en: 'DevOps Engineer', ko: 'DevOps 엔지니어' },
        points: {
          fr: [
            'Conception et industrialisation de pipelines CI/CD pour accélérer les cycles de déploiement',
            'Administration cloud (Azure) et supervision des infrastructures avec monitoring temps réel (Prometheus, Grafana)',
            'Automatisation du provisioning et de la configuration via Infrastructure as Code (Terraform, Ansible)',
          ],
          en: [
            'Designed and industrialized CI/CD pipelines to speed up release cycles',
            'Administered Azure and monitored infrastructure in real time (Prometheus, Grafana)',
            'Automated provisioning and configuration with Infrastructure as Code (Terraform, Ansible)',
          ],
          ko: [
            '배포 주기 단축을 위한 CI/CD 파이프라인 설계 및 표준화',
            'Azure 클라우드 운영 및 실시간 인프라 모니터링(Prometheus, Grafana)',
            'IaC(Terraform, Ansible)를 통한 프로비저닝 및 구성 자동화',
          ],
        },
        stack: ['Git / GitLab', 'Jenkins', 'Prometheus', 'Grafana', 'Terraform', 'Ansible'],
      },
    ],
  },
  {
    company: 'Sopra Steria',
    start: 2021,
    end: 2022,
    logo: 'sopra-steria',
    roles: [
      {
        title: {
          fr: 'Consultant Développeur Full Stack — Java & Angular',
          en: 'Full Stack Developer Consultant — Java & Angular',
          ko: '풀스택 개발 컨설턴트 (Java & Angular)',
        },
        missions: {
          fr: [ministere.justice.fr],
          en: [ministere.justice.en],
          ko: [ministere.justice.ko],
        },
        points: {
          fr: [
            "Développement d'applications web full stack avec architecture multi-tiers (Java Spring Boot, Angular)",
            'Migration technique majeure : modernisation de Java 8 vers Java 17 et refonte frontend avec Angular',
            'Mise en place de tests automatisés (unitaires, intégration) pour garantir la qualité du code',
            'Intégration en méthodologie Agile avec livraisons itératives et amélioration continue',
          ],
          en: [
            'Developed full stack web applications with a multi-tier architecture (Java Spring Boot, Angular)',
            'Major technical migration from Java 8 to Java 17 and frontend rebuild with Angular',
            'Set up automated testing (unit, integration) to ensure code quality',
            'Worked in an Agile team with iterative deliveries and continuous improvement',
          ],
          ko: [
            '다계층 아키텍처 기반 풀스택 웹 애플리케이션 개발(Java Spring Boot, Angular)',
            'Java 8에서 Java 17로의 대규모 기술 마이그레이션 및 Angular 프론트엔드 재구축',
            '코드 품질 확보를 위한 자동화 테스트(단위·통합) 구축',
            '반복적 배포와 지속적 개선 중심의 애자일 방식으로 업무 수행',
          ],
        },
        stack: ['Java 8 → 17', 'Spring Boot', 'Angular', 'React', 'Git / GitLab', 'Jenkins', 'Jira / Agile'],
      },
    ],
  },
  {
    company: { fr: 'Tianjin Polytechnic University', en: 'Tianjin Polytechnic University', ko: '톈진공업대학교' },
    flag: '🇨🇳',
    start: 2019,
    logo: 'tjpu',
    roles: [
      {
        title: {
          fr: 'Projet de recherche — Intelligence Artificielle culinaire',
          en: 'Research project — Culinary Artificial Intelligence',
          ko: '연구 프로젝트 — 요리 인공지능',
        },
        points: {
          fr: [
            "Développement d'un modèle d'IA de génération de textes de recettes basé sur les réseaux de neurones récurrents (RNN/LSTM) avec TensorFlow",
            "Création d'un dataset d'entraînement de plus de 10 000 recettes via web scraping automatisé",
            "Conception d'une interface web permettant la génération interactive de recettes personnalisées",
            '**En 2019 !**',
          ],
          en: [
            'Built an AI model that generates recipe texts using recurrent neural networks (RNN/LSTM) with TensorFlow',
            'Created a training dataset of 10,000+ recipes through automated web scraping',
            'Designed a web interface for interactive, personalized recipe generation',
            '**Back in 2019!**',
          ],
          ko: [
            'TensorFlow와 순환 신경망(RNN/LSTM)을 활용한 레시피 텍스트 생성 AI 모델 개발',
            '웹 스크래핑 자동화로 1만 개 이상의 레시피 학습 데이터셋 구축',
            '맞춤형 레시피를 대화형으로 생성하는 웹 인터페이스 설계',
            '**무려 2019년에!**',
          ],
        },
        stack: ['Python 3', 'TensorFlow', 'RNN / LSTM', 'Flask', 'BeautifulSoup', 'HTML / CSS / JS'],
      },
    ],
  },
];
