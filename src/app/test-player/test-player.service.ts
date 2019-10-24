import { Injectable } from '@angular/core';
import { Response } from './shared/models/response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestPlayerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  updateTestQuestionResponse(testQuestionId: number, answer: string): Observable<any> {
    return this.http.put(
      AppConfig.apiURL + 'test/answer',
      {
        testQuestionId: testQuestionId,
        answer: answer
      },
      this.httpOptions);
  }
}