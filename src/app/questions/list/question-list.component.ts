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
  displayedColumns: string[] = ['questionId', 'text', 'type', 'level', 'go'];
  ELEMENT_DATA: Question[];
  dataSource: MatTableDataSource<any>;

  constructor(private questionService: QuestionService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.questionService.getQuestions().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
    });
  }

  getQuestionLevel(level: number) {
    switch (level) {
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

  getQuestionType (type: number) {
    switch (type) {
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
}
