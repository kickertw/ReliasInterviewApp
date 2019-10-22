import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../shared/models/candidate.model';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  candidates: Candidate[];

  constructor(private candidateService: CandidateService) { }

  ngOnInit() {
    this.candidateService.GetCandidates().subscribe(res => {
      this.candidates = res;
      console.log(this.candidates)
    });
  }

}

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  GetCandidates(): Observable<Candidate[]> {
    return of([{id: 1,
      firstName: 'first',
      lastName: 'last',
      positionType: 'Engineer1',
      created: 'this is the description'
      },{id: 2,
        firstName: 'second',
        lastName: 'last2',
        positionType: 'Engineer2',
        created: 'this is the description'}])
  }
}

