import { Injectable } from '@angular/core';
import { Question } from './shared/models/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'questions');
  }

  createQuestion(question: Question): Observable<any> {
    return this.http.post(AppConfig.apiURL + 'questions', question);
  }

  updateQuestion(question: Question): Observable<any> {
    return this.http.put(
      AppConfig.apiURL + 'questions',
      question,
      this.httpOptions);
  }
}
