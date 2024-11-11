import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReworkRequestsService {
  private apiUrl = 'http://localhost:3000/api/rework-requests';

  constructor(private http: HttpClient) { }

  // Create a new rework request
  createReworkRequest(reworkData: any): Observable<any> {
    return this.http.post(this.apiUrl, reworkData);
  }

  // Get all rework requests
  getAllReworkRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a specific rework request by ID
  getReworkRequestById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a rework request
  updateReworkRequest(id: string, reworkData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, reworkData);
  }

  // Delete a rework request
  deleteReworkRequest(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
