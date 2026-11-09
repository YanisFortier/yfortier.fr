import type { L } from '../i18n/ui';
import type { Engagement } from './types';

export const introEngagements: L<string> = {
  fr: "Je suis quelqu'un de passionné par la culture sans aucune restriction. Qu'elle soit moderne ou ancienne, je suis favorable à sa diffusion auprès du maximum de personnes. C'est pourquoi je me suis engagé auprès des associations culturelles de mon école, et au-delà.",
  en: 'I am passionate about culture, without restriction. Whether modern or traditional, I believe it should reach as many people as possible. That is why I got involved in my school’s cultural associations, and beyond.',
  ko: '저는 장르를 가리지 않고 문화를 사랑합니다. 현대 문화든 전통 문화든 더 많은 사람이 누릴 수 있어야 한다고 생각합니다. 그래서 학교의 문화 동아리는 물론 학교 밖에서도 꾸준히 활동해 왔습니다.',
};

export const engagements: Engagement[] = [
  {
    title: { fr: 'Bureau des Arts', en: 'Arts Society', ko: '예술 동아리' },
    body: {
      fr: [
        "J'ai été membre actif pendant 2 ans du Bureau des Arts. La première année, j'exerçais les fonctions de **Trésorier** et de **Responsable Communication**. J'ai laissé la première fonction lors de ma réélection la deuxième année, pour me concentrer sur les communications internes et externes de l'association.",
        "Ce rôle m'a beaucoup appris sur l'engagement des utilisateurs, la rédaction d'articles et la communication en général. Mon travail de trésorier m'a été très utile en cours de finances, mais aussi dans ma vie professionnelle, lors de mon **stage en Chine** plus particulièrement.",
      ],
      en: [
        'I was an active member of the Arts Society (Bureau des Arts) for two years. In my first year, I served as **Treasurer** and **Head of Communications**. When I was re-elected the following year, I gave up the treasurer role to focus on the association’s internal and external communications.',
        'This role taught me a lot about user engagement, writing articles and communication in general. My work as treasurer proved very useful in finance classes, and in my professional life too, especially during my **internship in China**.',
      ],
      ko: [
        '2년 동안 예술 동아리(Bureau des Arts)에서 활동했습니다. 첫해에는 **회계**와 **홍보 담당**을 함께 맡았고, 이듬해 재선된 뒤에는 회계 업무를 내려놓고 동아리의 대내외 홍보에 집중했습니다.',
        '이 경험을 통해 사용자 참여, 기사 작성, 커뮤니케이션 전반에 대해 많이 배웠습니다. 회계 경험은 재무 수업뿐 아니라 직장 생활, 특히 **중국 인턴십**에서 큰 도움이 되었습니다.',
      ],
    },
  },
  {
    title: { fr: "ESAIP'Games", en: "ESAIP'Games", ko: "ESAIP'Games" },
    body: {
      fr: [
        "Lors de mon passage en deuxième année, j'ai été **animateur** au sein de l'association dédiée aux jeux vidéo, jeux de rôles et jeux de société de mon école, bref la culture ludique : ESAIP'Games !",
        "Mon rôle était d'organiser et d'aider mes camarades à réaliser des animations autour des jeux. Mon projet le plus important a été l'organisation d'un tournoi de jeux vidéo dans le **plus gros bar de jeu vidéo** de la ville d'Angers.",
      ],
      en: [
        "In my second year, I became an **event organizer** for my school’s association dedicated to video games, role-playing games and board games — in short, gaming culture: ESAIP'Games!",
        'My role was to organize events and help fellow students run gaming activities. My biggest project was a video game tournament held in the **largest gaming bar** in Angers.',
      ],
      ko: [
        "2학년 때 비디오 게임, 롤플레잉 게임, 보드게임 등 게임 문화를 다루는 학교 동아리 ESAIP'Games에서 **운영진**으로 활동했습니다.",
        '게임 관련 행사를 기획하고 동료 학생들의 활동을 도왔습니다. 가장 큰 프로젝트는 앙제에서 **가장 큰 게임 바**를 빌려 비디오 게임 대회를 개최한 일입니다.',
      ],
    },
  },
  {
    title: { fr: 'Traductions', en: 'Translations', ko: '번역 활동' },
    body: {
      fr: [
        "Je parle couramment plusieurs langues et j'en apprends de nouvelles tous les ans. Cet intérêt m'a permis de rejoindre **La confrérie des traducteurs**, un forum de passionnés de jeux vidéo et de jeux de société qui traduisent bénévolement des contenus culturels de l'anglais vers le français et inversement.",
        "J'y participe depuis l'adolescence, âge où j'ai commencé à être assez compétent en anglais pour aider, et je continue régulièrement à proposer des traductions pour rendre la culture vidéoludique accessible à tous.",
      ],
      en: [
        'I speak several languages fluently and learn new ones every year. This interest led me to join **La confrérie des traducteurs**, a forum of video game and board game enthusiasts who volunteer to translate cultural content between English and French.',
        'I have been contributing since my teenage years, when my English became good enough to help, and I still regularly offer translations to make gaming culture accessible to everyone.',
      ],
      ko: [
        '여러 언어를 유창하게 구사하며 매년 새로운 언어를 배우고 있습니다. 이러한 관심을 계기로, 비디오 게임과 보드게임 애호가들이 영어와 프랑스어 사이의 문화 콘텐츠를 자발적으로 번역하는 포럼 **La confrérie des traducteurs**에 참여하게 되었습니다.',
        '영어 실력이 도움이 될 만큼 늘었던 10대 시절부터 참여해 왔으며, 지금도 누구나 게임 문화를 즐길 수 있도록 꾸준히 번역에 기여하고 있습니다.',
      ],
    },
  },
];

export const valeurs: { texte: L<string>; valeurs: L<string[]>; antiValeurs: L<string[]> } = {
  texte: {
    fr: "Au travers de mes engagements, j'essaie toujours de rendre ce monde plus joyeux, plus amusant, plus intéressant, et je pense que la meilleure manière d'y arriver passe par la culture. Pour moi, la culture est **indispensable** à l'Humain.",
    en: 'Through my commitments, I always try to make the world more joyful, more fun and more interesting, and I believe culture is the best way to get there. To me, culture is **essential** to humankind.',
    ko: '저는 여러 활동을 통해 세상을 조금 더 즐겁고 재미있고 흥미로운 곳으로 만들고자 하며, 그 가장 좋은 방법은 문화라고 믿습니다. 저에게 문화는 인간에게 **없어서는 안 될** 존재입니다.',
  },
  valeurs: {
    fr: ['Curiosité', 'Respect', 'Travail', 'Réussite', 'Dynamisme'],
    en: ['Curiosity', 'Respect', 'Hard work', 'Success', 'Energy'],
    ko: ['호기심', '존중', '노력', '성취', '열정'],
  },
  antiValeurs: {
    fr: ['Échec', 'Égoïsme', 'Tradition', 'Injustice', 'Excès'],
    en: ['Failure', 'Selfishness', 'Tradition', 'Injustice', 'Excess'],
    ko: ['실패', '이기심', '관습', '불의', '과잉'],
  },
};
