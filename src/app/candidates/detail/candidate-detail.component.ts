import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Candidate } from '../shared/models/candidate.model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;
  candidateLoaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private candidateService: CandidateService
  ) {}

  ngOnInit() {
    const candidateId = +this.route.snapshot.paramMap.get('id');

    if (candidateId === 0) {
      this.candidate = <Candidate>{
        id: 0,
        firstName: '',
        lastName: '',
        positionType: '',
        created: null,
        tests: null
      };
    } else {
      this.getCandidate(candidateId);
    }
  }

  getCandidate(id: number): void {
    this.candidateService.getCandidate(id).subscribe(response => {
      this.candidate = response;
      this.candidateLoaded = true;
    });
  }

  saveCandidate() {
    if (this.candidate.id === 0) {
      this.candidate.created = new Date();
      console.log(this.candidate);
      this.candidateService.createCandidate(this.candidate).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.candidateService.updateCandidate(this.candidate).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

  goToTest(testId) {
    this.router.navigate(['/test-builder', testId]);
  }
}
