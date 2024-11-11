import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportedIssuesService {
  private apiUrl = 'http://localhost:3000/api/reported-issues';

  constructor(private http: HttpClient) { }

  // Create a new reported issue
  createIssue(issueData: any): Observable<any> {
    return this.http.post(this.apiUrl, issueData);
  }

  // Get all reported issues
  getAllIssues(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a specific issue by ID
  getIssueById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a reported issue
  updateIssue(id: string, issueData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, issueData);
  }

  // Delete a reported issue
  deleteIssue(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Dismiss a reported issue
  dismissIssue(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/dismiss`, {});
  }

  // Resolve a reported issue
  resolveIssue(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/resolve`, {});
  }
}
