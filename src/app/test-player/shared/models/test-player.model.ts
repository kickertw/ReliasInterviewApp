import { CandidateTestQuestion } from "../../../test/shared/models/candidate-test-question.model";

export interface TestPlayer {
  testId: number;
  candidateId: number;
  testQuestions: Array<CandidateTestQuestion>;

}
