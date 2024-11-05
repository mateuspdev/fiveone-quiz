export enum QuizCategory {
  APOSTOLO = "apostolo",
  PROFETA = "profeta",
  EVANGELISTA = "evangelista",
  PASTOR = "pastor",
  MESTRE = "mestre",
}

export interface Question {
  id: number;
  category: QuizCategory;
  question: string;
}

export interface CategoryMetadata {
  id: QuizCategory;
  name: string;
  description: string;
}
