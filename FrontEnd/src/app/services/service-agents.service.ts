import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAgentsService {
  private apiUrl = 'http://localhost:3000/api/service-agents';

  constructor(private http: HttpClient) { }

  // Create a new service agent
  createServiceAgent(agentData: any): Observable<any> {
    return this.http.post(this.apiUrl, agentData);
  }

  // Get all service agents
  getAllServiceAgents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a specific service agent by ID
  getServiceAgentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a service agent
  updateServiceAgent(id: string, agentData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, agentData);
  }

  // Delete a service agent
  deleteServiceAgent(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
