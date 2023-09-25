export interface Country {
  capitalInfo: any;
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  flags: Flags;
  timezones: string[];
}

export interface Currencies {
  [key: string]: Currency;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Languages {
  [key: string]: string;
}

export interface Demonyms {
  [key: string]: Conjugation;
}

export interface Conjugation {
  f: string;
  m: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Gini {
  object?: number;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  [key: string]: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Excerpt {
  extract: string;
}
