export interface Question {
  questionId: number;
  text: string;
  type: number;
  typeDisplay: string;
  level: number;
  levelDisplay: string;
  description?: string;
  answer?: string;
  isActive: boolean;
}
