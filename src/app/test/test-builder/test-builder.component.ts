import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { QuestionService } from '../../questions/question.service';
import { Question } from '../../questions/shared/models/question.model';
import { CandidateTest } from '../shared/models/candidate-test.model';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-builder',
  templateUrl: './test-builder.component.html',
  styleUrls: ['./test-builder.component.scss']
})
export class TestBuilderComponent implements OnInit {
  key = 'id';
  display = 'text';
  source = [];
  target = [];
  currentTest: CandidateTest;
  private isLastUpdate = false;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private questionService: QuestionService,
    private toastr: ToastrService) { }

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
    this.toastr.info('', 'Saving...');

    this.target.forEach(q => {
      this.testService.addTestQuestion(this.currentTest.testId, q.id).subscribe();
    });

    for (let ii = 0; ii < this.source.length; ii++) {
      if (!this.target.includes(this.source[ii])) {
        if (ii === this.source.length - 1) {
          this.isLastUpdate = true;
        }
        this.testService.removeTestQuestion(this.currentTest.testId, this.source[ii].id).subscribe(
          () => {
            if (this.isLastUpdate) {
              this.toastr.success('', 'Questions successfully saved.');
              this.isLastUpdate = false;
            }
          }
        );
      }
    }
  }
}
