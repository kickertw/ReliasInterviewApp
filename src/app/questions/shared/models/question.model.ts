export interface Question {
  id: number;
  text: string;
  type: string;
  level: string;
  description: string;
  answer?: string;
  isActive: boolean;
}
