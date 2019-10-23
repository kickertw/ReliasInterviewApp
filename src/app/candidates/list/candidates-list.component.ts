import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Candidate } from '../shared/models/candidate.model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'positionType',
    'created',
    'go'
  ];
  ELEMENT_DATA: Candidate[];
  dataSource: MatTableDataSource<any>;

  constructor(private candidateService: CandidateService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.candidateService.getCandidates().subscribe(res => {
      this.ELEMENT_DATA = res;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    });
  }
}
