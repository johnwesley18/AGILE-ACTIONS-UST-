import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service'; // Adjust the import path accordingly
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private baseUrl = 'http://localhost:9099/api/professionals'; // Base URL for API

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllProfessionals(): Observable<any> {
    const apiUrl = `${this.baseUrl}`;
    return this.http.get(apiUrl);
  }

  registerProfessional(professional: any): Observable<any> {
    const userId = localStorage.getItem('userId');
    const apiUrl = `${this.baseUrl}/register/${userId}`;
    return this.http.post(apiUrl, professional);
  }

  updateSchedule(availableSlots: Set<string>): Observable<any> {
    const userId = this.authService.getProfessionalId();
    const apiUrl = `${this.baseUrl}/${userId}/schedule`;
    
    return this.http.put(apiUrl, Array.from(availableSlots)); // Convert Set to Array
  }
}
