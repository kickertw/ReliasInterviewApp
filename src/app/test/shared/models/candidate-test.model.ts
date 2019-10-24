import { CandidateTestQuestion } from "./candidate-test-question.model";

export interface CandidateTest {
  name: string;
  created: Date;
  testId: number;
  candidateId: number;
  testQuestions: Array<CandidateTestQuestion>;
}
