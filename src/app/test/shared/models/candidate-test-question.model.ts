import { Question } from '../../../questions/shared/models/question.model';

export interface CandidateTestQuestion {
    testQuestionsId: number;
    testId: number;
    question: Question;
    answer: string;
}
