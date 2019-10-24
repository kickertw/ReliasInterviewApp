import { Component, OnInit } from '@angular/core';
import { TestPlayerService } from './test-player.service';
import { QuestionService } from '../questions/question.service';
import { TestService } from '../test/test.service';
import { Question } from '../questions/shared/models/question.model';
import { Response } from './shared/models/response.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-test-player',
  templateUrl: './test-player.component.html',
  styleUrls: ['./test-player.component.scss']
})
export class TestPlayerComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Question', 'Type', 'Level'];
  dataSource: MatTableDataSource<Question>;
  questions: Array<Question>;
  responses: Array<Response>;
  response: Response;
  testId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testPlayerService: TestPlayerService,
    private questionService: QuestionService,
    private testService: TestService) { }

  ngOnInit() {
    this.buildTest();
  }

  buildTest(): void {
    // get list of questions
    // get list of already saved responses
  }
  getResponse(id: number): void {
    this.testPlayerService.getResponse().subscribe(response => {
      this.response = response.filter(obj => obj.responseId === id)[0];
    });
  }

  getResponses(testId: number): void {
    this.testPlayerService.getResponses(testId);
  }

  saveResponse() {
    if (this.response.answer === null){
      this.testPlayerService.createResponse(this.response).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    } else {
      this.testPlayerService.updateResponse(this.response).subscribe(
        response => console.log(response),
        error => console.log(error)
      );
    }
  }
}
