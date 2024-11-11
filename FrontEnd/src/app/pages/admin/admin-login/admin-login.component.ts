import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Admin login API endpoint
      const adminLoginUrl = 'http://localhost:9998/auth/login';

      this.http.post(adminLoginUrl, {...this.loginForm.value,email:this.loginForm.get('username')?.value}).subscribe({
        next: (response: any) => {
          console.log('Admin login successful', response);
          alert("Admin Logged In Successfully");

          const token = response.token;
          this.authService.setToken(token);

          // Navigate to admin dashboard after successful login
          this.router.navigate(['/admin/dashboard']);
        },
        error: (error) => {
          console.error('Error during admin login', error);
          alert("Invalid admin credentials!");
        }
      });
    }
  }
}
