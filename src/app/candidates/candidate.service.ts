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
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getCandidate(id: number): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'candidate/' + id);
  }

  getCandidates(): Observable<any> {
    return this.http.get(AppConfig.apiURL + 'candidates');
  }

  createCandidate(candidate: Candidate): Observable<any> {
    return this.http.post(AppConfig.apiURL + 'candidates', candidate);
  }

  updateCandidate(candidate: Candidate): Observable<any> {
    return this.http.put(
      AppConfig.apiURL + 'candidates',
      candidate,
      this.httpOptions
    );
  }
}
