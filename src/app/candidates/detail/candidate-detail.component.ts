import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Candidate } from '../shared/models/candidate.model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  candidate: Candidate;

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
        created: null
      };
    } else {
      this.getCandidate(candidateId);
    }
  }

  getCandidate(id: number): void {
    this.candidateService.getCandidate(id).subscribe(response => {
      this.candidate = response;
    });
  }

  saveCandidate() {
    if (this.candidate.id === 0) {
      this.candidateService
        .createCandidate(this.candidate)
        .subscribe(
          response => console.log(response),
          error => console.log(error)
        );
    } else {
      this.candidateService
        .updateCandidate(this.candidate)
        .subscribe(
          response => console.log(response),
          error => console.log(error)
        );
    }
  }
}
