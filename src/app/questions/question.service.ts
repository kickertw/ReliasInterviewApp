import { Injectable } from '@angular/core';
import { Question } from './shared/models/question.model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'questions');
  }
}
