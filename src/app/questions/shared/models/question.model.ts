export interface Question {
  questionId: number;
  text: string;
  type: number;
  level: number;
  description?: string;
  answer?: string;
  isActive: boolean;
}
