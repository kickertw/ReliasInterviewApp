import { CandidateTestQuestion } from './candidate-test-question.model';

export interface CandidateTest {
  name: string;
  created: Date;
  testId: number;
  candidateId: number;
  hasTestQuestions: boolean;
  finished: boolean;
  testQuestions: Array<CandidateTestQuestion>;
}
