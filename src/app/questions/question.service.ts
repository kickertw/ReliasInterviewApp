import { Injectable } from '@angular/core';
import { Question } from './shared/models/question.model';
import { MockQuestions } from './shared/models/mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(): Question[] {
    return MockQuestions;
  }
}
