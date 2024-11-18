import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AgileActions';
  constructor(private router: Router) {}
  isAdminRoute(): boolean {
    const adminRoutes = ['/admin', '/admin/dashboard','/admin/raise','/admin/login', '/admin/review', '/admin/service-agents', '/admin/rework-requests', '/admin/refunds', '/admin/reported-issues', '/admin/service-listing'];
    return adminRoutes.includes(this.router.url);
  }
}
