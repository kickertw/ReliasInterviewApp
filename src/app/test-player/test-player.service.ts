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

  getResponse(): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'response');
  }

  getResponses(testId: number): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'responses' + testId);
  }

  createResponse(response: Response): Observable<any> {
    return this.http.post(AppConfig.apiURL + 'response', response);
  }

  updateResponse(response: Response): Observable<any> {
    return this.http.put(
      AppConfig.apiURL + 'response',
      response,
      this.httpOptions);
  }
}