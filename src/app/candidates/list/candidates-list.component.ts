import {Component, OnInit, ViewChild, Injectable} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Candidate } from '../shared/models/candidate.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'positionType', 'created'];
  ELEMENT_DATA: Candidate[];
  dataSource: MatTableDataSource<any>;

  constructor(private candidateService: CandidateService){}

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.candidateService.getCandidates().subscribe(res => {
      this.ELEMENT_DATA = res;
    })
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

}

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  getCandidates(): Observable<Candidate[]> {
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

