import type { L, Tr } from '../i18n/ui';

/*
 * Chaque texte visible est soit une chaîne identique dans toutes les langues
 * (noms propres, technos), soit un objet { fr, en, ko }.
 */

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
  /** Identifiant du logo standardisé : public/img/logos/<logo>-light|dark.png (voir scripts/build-logos.mjs) */
  logo: string;
  roles: Role[];
  /** false = affiché sur le site mais pas dans le CV PDF */
  inCv?: boolean;
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
  /** Identifiant du logo standardisé : public/img/logos/<logo>-light|dark.png (voir scripts/build-logos.mjs) */
  logo: string;
  groups: Group[];
  exchanges?: Exchange[];
  /** false = affiché sur le site mais pas dans le CV PDF */
  inCv?: boolean;
}

export interface Engagement {
  title: L<string>;
  /** Paragraphes ; **gras** autorisé */
  body: L<string[]>;
}
