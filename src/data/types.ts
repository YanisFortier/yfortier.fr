import type { L, Tr } from '../i18n/ui';

/*
 * Chaque texte visible est soit une chaîne identique dans toutes les langues
 * (noms propres, technos), soit un objet { fr, en, ko }.
 */

export interface Logo {
  src: string;
  /** Fond à appliquer derrière un logo blanc ou transparent */
  background?: string;
}

export interface Role {
  title: Tr<string>;
  /** Ministère·s ou client·s de la mission */
  missions?: L<string[]>;
  /** Points de la mission ; **gras** autorisé */
  points: L<string[]>;
  stack: Tr<string>[];
}

export interface Experience {
  company: Tr<string>;
  /** Drapeau emoji affiché devant le nom (ex. expérience à l'étranger) */
  flag?: string;
  start: number;
  /** null = poste actuel ; absent = même année que start */
  end?: number | null;
  logo?: Logo;
  roles: Role[];
}

export interface Group {
  title: L<string>;
  items: Tr<string[]>;
}

export interface Exchange {
  flag: string;
  school: Tr<string>;
  country: L<string>;
  period: L<string>;
  groups: Group[];
}

export interface Formation {
  school: Tr<string>;
  start: number;
  end: number;
  degree: L<string>;
  logo?: Logo;
  groups: Group[];
  exchanges?: Exchange[];
}

export interface Engagement {
  title: L<string>;
  /** Paragraphes ; **gras** autorisé */
  body: L<string[]>;
}
