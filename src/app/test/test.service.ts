import { Injectable } from '@angular/core';
import { CandidateTest } from './shared/models/candidate-test.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTest(id: number): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'test/' + id);
  }

  addTestQuestion(testId: number, questionId: number): Observable<any> {
    console.log("tim");
    return this.http.post(AppConfig.apiURL + '/test/question',
    {
      testId: testId,
      questionid: questionId
    });
  }

  removeTestQuestion(testId: number, questionId: number): Observable<any> {
    return this.http.delete(AppConfig.apiURL + '/test/' + testId + '/question/' + questionId);
  }
}
