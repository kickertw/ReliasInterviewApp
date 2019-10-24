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
  displayedColumns: string[] = ['Id', 'Question', 'Type', 'Level', 'go'];
  dataSource: MatTableDataSource<Question>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getQuestions().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
    });
  }
}
