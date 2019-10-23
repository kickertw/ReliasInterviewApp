import { Injectable } from '@angular/core';
import { Candidate } from './shared/models/candidate.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getCandidates(): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'candidate');
  }

  createCandidate(candidate: Candidate): Observable<any> {
    return this.http.post(AppConfig.apiURL + 'candidate', candidate);
  }

  updateQuestion(candidate: Candidate): Observable<any> {
    return this.http.put(
      AppConfig.apiURL + 'candidate',
      candidate,
      this.httpOptions);
  }
}
