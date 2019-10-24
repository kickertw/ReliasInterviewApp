import { CandidateTestQuestion } from './candidate-test-question.model';

export interface CandidateTest {
  testId: number;
  candidateId: number;
  testQuestions: Array<CandidateTestQuestion>;

}
