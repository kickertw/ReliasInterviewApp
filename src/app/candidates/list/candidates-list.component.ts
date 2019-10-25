import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Candidate } from '../shared/models/candidate.model';
import { CandidateService } from '../candidate.service';
import { MatPaginator } from '@angular/material';

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

  dataSource: MatTableDataSource<any>;

  constructor(private candidateService: CandidateService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.candidateService.getCandidates().subscribe((res: Candidate[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
