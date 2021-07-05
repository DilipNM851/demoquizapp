export interface Question {
  id: number;
  questionText: string;
  options: Option[];
  optval: abc[];
  point: number;
}

export interface Option {
  text: string;
}
export interface abc {
  text: number;
}