import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getRepositories(repoName: string): Observable<any> {
    return this.http.get(`https://api.github.com/search/repositories?q=${repoName}`);
  }

  getIssues(full_name: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${full_name}/issues?state=all`);
  }

  getClosedIssues(full_name: string): Observable<any> {
    return this.http.get(`https://api.github.com/repos/${full_name}/issues?state=closed`);
  }
}
