import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {}

  canActivate(): boolean {
    if (this.adminAuthService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/admin/login']);
    return false;
  }
} 