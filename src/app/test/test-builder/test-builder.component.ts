import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { QuestionService } from '../../questions/question.service';
import { Question } from '../../questions/shared/models/question.model';
import { CandidateTest } from '../shared/models/candidate-test.model';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-builder',
  templateUrl: './test-builder.component.html',
  styleUrls: ['./test-builder.component.scss']
})
export class TestBuilderComponent implements OnInit {
  key = 'id';
  display = 'text';
  source =[];
  target = [];
  currentTest: CandidateTest;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private questionService: QuestionService) { }

  ngOnInit() {
    const testId = +this.route.snapshot.paramMap.get('id');
    forkJoin(this.questionService.getQuestions(), this.testService.getTest(testId)).subscribe(
      ([questions, test]) => {
        this.source = questions.map((data: Question) => {
          return { id: data.questionId, text: data.text };
        });
        this.currentTest = test;

        this.source.forEach(q => {
          let isInTest = false;
          if (this.currentTest.testQuestions) {
            isInTest = this.currentTest.testQuestions.some(i => {
              return i.question.questionId === q.id;
            });
          }
          if (isInTest) {
            this.target.push(q);
          }
        });
      });
  }

  onDualListChange() {
    this.target.forEach(q => {
      this.testService.addTestQuestion(this.currentTest.testId, q.id).subscribe();
    });

    for (let ii = 0; ii < this.source.length; ii++) {
      if (!this.target.includes(this.source[ii])) {
        this.testService.removeTestQuestion(this.currentTest.testId, this.source[ii].id).subscribe();
      }
    }
  }
}
