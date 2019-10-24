import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { CandidateTest } from '../shared/models/candidate-test.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-player',
  templateUrl: './test-player.component.html',
  styleUrls: ['./test-player.component.scss']
})
export class TestPlayerComponent implements OnInit {
  currentTest: CandidateTest;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService) { }

  ngOnInit() {
    this.buildTest();
  }

  buildTest(): void {
    // get list of questions by loading the test
    const testId = +this.route.snapshot.paramMap.get('id');
    this.testService.getTest(testId).subscribe(response => {
      this.currentTest = response;
    });
  }

  saveResponse(id: number, answer: string): void {
    this.testService.updateTestAnswer(id, answer).subscribe();
  }
}
