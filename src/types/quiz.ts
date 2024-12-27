export enum QuizCategory {
  APOSTOLO = "apostolo",
  PROFETA = "profeta",
  EVANGELISTA = "evangelista",
  PASTOR = "pastor",
  MESTRE = "mestre",
}

interface WithCategory {
  category: QuizCategory;
}

export interface Statement extends WithCategory {
  id: number;
  text: string;
}

export interface ComparisonQuestion {
  id: number;
  statement1: Statement;
  statement2: Statement;
}

export interface CategoryMetadata extends WithCategory {
  id: QuizCategory;
  name: string;
  description: string;
}

export interface CategoryScore extends WithCategory {
  score: number;
  metadata: CategoryMetadata;
}
