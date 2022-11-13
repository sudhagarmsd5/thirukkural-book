//#region kural

export interface IKural {
  number: number;
  line_1: string;
  line_2: string;
  translation: string;
  mu_varatharasanar: string;
  solomon_pappaiah: string;
  mu_karunanidhi: string;
  explanation: string;
  couplet: string;
  transliteration_1: string;
  transliteration_2: string;
}

export interface RootObject {
  kural: IKural[];
}

//#endregion kural

//#region kural_details

export interface Detail3 {
  name: string;
  translation: string;
  transliteration: string;
  number: number;
  start: number;
  end: number;
}

export interface Chapters {
  tamil: string;
  detail: Detail3[];
}

export interface Detail2 {
  name: string;
  transliteration: string;
  translation: string;
  number: number;
  chapters: Chapters;
}

export interface ChapterGroup {
  tamil: string;
  detail: Detail2[];
}

export interface Detail {
  name: string;
  transliteration: string;
  translation: string;
  number: number;
  chapterGroup: ChapterGroup;
}

export interface Section {
  tamil: string;
  detail: Detail[];
}

export interface IKuralDetail {
  tamil: string;
  section: Section;
}

export interface IThirukkural {
  kural_detail: IKuralDetail[];
}

//#endregion kural_details
