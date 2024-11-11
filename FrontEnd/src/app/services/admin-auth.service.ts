import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private currentAdminSubject = new BehaviorSubject<any>(null);
  public currentAdmin = this.currentAdminSubject.asObservable();

  constructor(private http: HttpClient) {
    const admin = localStorage.getItem('admin');
    if (admin) {
      this.currentAdminSubject.next(JSON.parse(admin));
    }
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`http://localhost:9998/auth/login`, { username, password })
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('admin', JSON.stringify(response));
          this.currentAdminSubject.next(response);
        }
        return response;
      }));
  }

  logout() {
    localStorage.removeItem('admin');
    this.currentAdminSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.currentAdminSubject.value;
  }
} 