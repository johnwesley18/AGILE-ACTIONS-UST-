import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) {}

  private apiUrl = `http://localhost:9998/api/professionals`;

  // Implement addServiceAgent method
  addServiceAgent(newAgent: { available: boolean; location: string; profession_details: string; rating: null; total_bookings: number; user_id: string; zip: string; }): Observable<any> {
    return this.http.post(`${environment.apiUrl}/admin/service-agents`, newAgent);
  }

  // Implement deleteServiceAgent method
  deleteServiceAgent(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/admin/service-agents/${id}`);
  }

  // Dashboard Stats
  getDashboardStats(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/dashboard-stats`);
  }

  // Listings
  getAllListings(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/listings`);
  }

  addListing(listingData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/listings`, listingData);
  }

  updateListing(id: string, listingData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/listings/${id}`, listingData);
  }

  deleteListing(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/listings/${id}`);
  }

  // Service Agents
  getServiceAgents(page: number = 1): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/service-agents?page=${page}`);
  }

  approveServiceAgent(id: string): Observable<any> {
    return this.http.put(`${environment.apiUrl}/admin/service-agents/${id}/approve`, {});
  }

  // Refunds
  getRefunds(page: number = 1): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/refunds?page=${page}`);
  }

  processRefund(id: string, status: string): Observable<any> {
    return this.http.put(`${environment.apiUrl}/admin/refunds/${id}`, { status });
  }

  // Rework Requests
  getReworkRequests(page: number = 1): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/rework-requests?page=${page}`);
  }

  updateReworkStatus(id: string, status: string): Observable<any> {
    return this.http.put(`${environment.apiUrl}/admin/rework-requests/${id}`, { status });
  }

  // Reported Issues
  getReportedIssues(page: number = 1): Observable<any> {
    return this.http.get(`${environment.apiUrl}/admin/reported-issues?page=${page}`);
  }

  resolveIssue(id: string, resolution: string): Observable<any> {
    return this.http.put(`${environment.apiUrl}/admin/reported-issues/${id}`, { resolution });
  }
}
