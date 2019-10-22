import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  question: Question;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private questionService: QuestionService) { }

  ngOnInit() {
    this.getQuestion(+this.route.snapshot.paramMap.get('id'));
  }

  getQuestion(id: number): void {
    this.questionService.getQuestions().subscribe(response => {
      this.question = response.filter(obj => obj.questionId === id)[0];
    });
  }
}
