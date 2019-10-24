import { Question } from "../../../questions/shared/models/question.model";

export interface CandidateTestQuestion {
    testQuestionId: number;
    testId: number;
    question: Question;
    answer: string;

  }
  