import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RefundsService {
  private apiUrl = 'http://localhost:3000/api/refunds'; // Adjust URL as needed

  constructor(private http: HttpClient) { }

  // Create a new refund request
  createRefund(refundData: any): Observable<any> {
    return this.http.post(this.apiUrl, refundData);
  }

  // Get all refund requests
  getAllRefunds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a specific refund request by ID
  getRefundById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a refund request
  updateRefund(id: string, refundData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, refundData);
  }

  // Delete a refund request
  deleteRefund(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
