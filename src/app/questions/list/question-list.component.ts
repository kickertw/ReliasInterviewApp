import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../question.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Question', 'Type', 'Level'];
  dataSource: MatTableDataSource<Question>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.dataSource = new MatTableDataSource(this.questionService.getQuestions());
    this.dataSource.sort = this.sort;
  }
}
