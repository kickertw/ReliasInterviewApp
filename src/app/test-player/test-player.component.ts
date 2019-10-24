import { Component, OnInit } from '@angular/core';
import { TestPlayerService } from './test-player.service';
import { QuestionService } from '../questions/question.service';
import { TestService } from '../test/test.service';
import { Question } from '../questions/shared/models/question.model';
import { Response } from './shared/models/response.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidateTestQuestion } from '../test/shared/models/candidate-test-question.model';
import { CandidateTest } from '../test/shared/models/candidate-test.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-test-player',
  templateUrl: './test-player.component.html',
  styleUrls: ['./test-player.component.scss']
})
export class TestPlayerComponent implements OnInit {
  // displayedColumns: string[] = ['Id', 'Question', 'Type', 'Level'];
  dataSource: MatTableDataSource<Question>;
  currentTest: CandidateTest;
  // testQuestions: Array<CandidateTestQuestion>;
  // testId: number;

  constructor(
    private testService: TestService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.buildTest();
  }

  buildTest(): void {
    // get list of questions
    // Normally you get the testID from the URL parameter by doing "+this.route.snapshot.paramMap.get('id');"
    // We're just hardcoding for 1 right now
    this.testService.getTest(1).subscribe((data: CandidateTest) => {
      this.currentTest = data;
    });
  }

  // getResponse(id: number): void {
  //       this.testPlayerService.getResponse().subscribe(response => {
  //         this.response = response.filter(obj => obj.responseId === id)[0];
  //       });
  //     }

  // getResponses(testId: number): void {
  //       this.testPlayerService.getResponses(testId);
  //     }

  saveResponse() {
    this.currentTest.testQuestions.forEach(i => {
      this.testService.updateTestQuestionAnswer(i.testQuestionsId, i.answer).subscribe(
        () => { this.toastr.success('Test responses were successfully saved!', 'Success!'); },
        () => { this.toastr.error('An unexpected error has occurred', 'Beep Boop!'); }
      );
    });
    // if(this.response.answer === null){
    //   this.testPlayerService.createResponse(this.response).subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   );
    // } else {
    //   this.testPlayerService.updateResponse(this.response).subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   );
    // }
  }
}
