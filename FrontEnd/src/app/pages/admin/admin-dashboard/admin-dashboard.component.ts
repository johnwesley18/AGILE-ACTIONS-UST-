import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AdminDashboardComponent implements OnInit {
  statistics = {
    totalServiceAgents: 0,
    pendingRefunds: 0,
    reworkRequests: 0,
    reportedIssues: 0,
    totalServices: 0
  };

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const userId = this.authService.getUserId();
    const isLoggedIn = this.authService.isLoggedIn();
    console.log(userId, isLoggedIn);

    if (isLoggedIn) {
      if (this.router.url === '/admin' || this.router.url === '/admin/dashboard') {
        this.router.navigate(['/admin/service-agents']);
      }
    } else {
      this.router.navigate(['/admin/login']);
      return;
    }
  }
}
