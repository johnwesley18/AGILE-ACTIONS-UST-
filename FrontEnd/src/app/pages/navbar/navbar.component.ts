import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // Add CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return this.authService.getToken() !== null;
  }

  // Handle sign out
  signOut(): void {
    this.authService.clearToken();
    this.authService.clearUserId();
    this.authService.clearProfessionalId();
    this.router.navigate(['/']);
  }

  // Navigate to the authentication page
  navigateToAuth(): void {
    this.router.navigate(['/auth']);
  }
}
