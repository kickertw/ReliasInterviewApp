import { TestBed } from '@angular/core/testing';

import { QuestionService } from './question-service.service';

describe('QuestionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionService = TestBed.get(QuestionService);
    expect(service).toBeTruthy();
  });
});
