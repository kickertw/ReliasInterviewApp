import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Question } from '../shared/models/question.model';
import { QuestionService } from '../question.service';
import { ToastrService } from 'ngx-toastr';

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
    private questionService: QuestionService,
    private toastr: ToastrService) { }

  ngOnInit() {
    const questionId = +this.route.snapshot.paramMap.get('id');

    if (questionId === 0) {
      this.question = <Question> {
        questionId: 0,
        text: '',
        type: 0,
        level: 0,
        description: null,
        answer: null,
        isActive: true
      };
    } else {
      this.getQuestion(questionId);
    }
  }

  getQuestion(id: number): void {
    this.questionService.getQuestions().subscribe(response => {
      this.question = response.filter(obj => obj.questionId === id)[0];
    });
  }

  saveQuestion() {
    if (this.question.questionId === 0){
      this.questionService.createQuestion(this.question).subscribe(
        () => {
          this.toastr.success('', 'Updated!');
          this.router.navigate(['/question/list']);
        },
        () => {
          this.toastr.error('', 'An unexpected error has occurred!');
        }
      );
    } else {
      this.questionService.updateQuestion(this.question).subscribe(
        () => {
          this.toastr.success('', 'Updated!');
          this.router.navigate(['/question/list']);
        },
        () => {
          this.toastr.error('', 'An unexpected error has occurred!');
        }
      );
    }
  }
}
