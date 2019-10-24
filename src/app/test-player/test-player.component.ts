import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions/question.service';
import { TestService } from '../test/test.service';
import { Question } from '../questions/shared/models/question.model';
import { CandidateTest } from '../test/shared/models/candidate-test.model';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidateTestQuestion } from '../test/shared/models/candidate-test-question.model';


@Component({
  selector: 'app-test-player',
  templateUrl: './test-player.component.html',
  styleUrls: ['./test-player.component.scss']
})
export class TestPlayerComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Question', 'Type', 'Level'];
  currentTest: CandidateTest;

  constructor(
    private testService: TestService) { }

  ngOnInit() {
    this.buildTest();
  }

  buildTest(): void {
    // get list of questions
      this.testService.getTest(1).subscribe(response => {
      this.currentTest = response;
      });
    }

    saveResponse(id: number, answer: string): void {
      this.testService.updateTestAnswer(id, answer).subscribe();
    }
}
