import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { QuestionService } from '../../questions/question.service';
import { Question } from '../../questions/shared/models/question.model';
import { CandidateTest } from '../shared/models/candidate-test.model';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private testService: TestService,
    private questionService: QuestionService) { }

  ngOnInit() {
    forkJoin(this.questionService.getQuestions(), this.testService.getTest(1)).subscribe(
      ([questions, test]) => {
        let allQuestions = questions.map((data: Question) => {
          return { id: data.questionId, text: data.text };
        });
        this.currentTest = test;

        allQuestions.forEach(q => {
          let isInTest = this.currentTest.testQuestions.some(i => {
            return i.questionId === q.id;
          });
          if (isInTest)
          {
            console.log("target got here");
            this.target.push(q);
          } else 
          {
            console.log("source got here");
            this.source.push(q);
          }
        })
      });
  }

  onDualListChange() {
    this.target.forEach(q => { 
      this.testService.addTestQuestion(1, q.id).subscribe();
    });

    this.source.forEach(q => {
      this.testService.removeTestQuestion(1, q.id).subscribe();
    })
  }
}
