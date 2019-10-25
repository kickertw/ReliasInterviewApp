import { Component, OnInit, ViewChild } from '@angular/core';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../question.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  displayedColumns: string[] = ['text', 'type', 'level', 'go'];
  dataSource: MatTableDataSource<any>;

  constructor(private questionService: QuestionService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.questionService.getQuestions().subscribe((response: Question[]) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  getQuestionLevel(level: number) {
    switch (level) {
      case 0: {
        return 'Junior';
      }
      case 1: {
        return 'Mid';
      }
      default: {
        return 'Señor';
      }
    }
  }

  getQuestionType (type: number) {
    switch (type) {
      case 0: {
        return 'Behavioral';
      }
      case 1: {
        return 'Technical';
      }
      default: {
        return 'Misc.';
      }
    }
  }
}
