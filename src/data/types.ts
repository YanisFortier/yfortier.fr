export interface Logo {
  src: string;
  /** Fond à appliquer derrière un logo blanc ou transparent */
  background?: string;
}

export interface Role {
  title: string;
  /** Ministère·s ou client·s de la mission */
  missions?: string[];
  points: string[];
  stack: string[];
}

export interface Experience {
  company: string;
  /** Drapeau emoji affiché devant le nom (ex. expérience à l'étranger) */
  flag?: string;
  dates: string;
  logo?: Logo;
  roles: Role[];
}

export interface Group {
  title: string;
  items: string[];
}

export interface Exchange {
  flag: string;
  school: string;
  country: string;
  period: string;
  groups: Group[];
}

export interface Formation {
  school: string;
  dates: string;
  degree: string;
  logo?: Logo;
  groups: Group[];
  exchanges?: Exchange[];
}

export interface Engagement {
  title: string;
  /** Paragraphes ; **gras** autorisé */
  body: string[];
}
