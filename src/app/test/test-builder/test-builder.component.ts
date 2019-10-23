import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { QuestionService } from '../../questions/question.service';
import { Question } from '../../questions/shared/models/question.model';

@Component({
  selector: 'app-test-builder',
  templateUrl: './test-builder.component.html',
  styleUrls: ['./test-builder.component.scss']
})
export class TestBuilderComponent implements OnInit {
  key = 'id';
  display = 'text';
  source = [
    { id: 0, text: 'Item 1'},
    { id: 1, text: 'Item 2'},
    { id: 2, text: 'Item 3'},
    { id: 3, text: 'Item 4'},
  ];
  target = [];

  constructor(
    private testService: TestService,
    private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(resp => {
      this.source = resp.map((data: Question) => {
        return { id: data.questionId, text: data.text };
      });
    });
  }

  onDualListChange() {
    console.log(this.target);
  }
}
