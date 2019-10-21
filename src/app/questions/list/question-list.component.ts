import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  dataSource: Question[];
  displayedColumns: string[] = ['Id', 'Question', 'Type', 'Level', 'Actions'];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.dataSource = this.questionService.getQuestions();
  }
}
