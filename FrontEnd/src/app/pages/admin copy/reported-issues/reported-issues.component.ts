import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportedIssuesService } from '../../../services/reported-issues.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reported-issues',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reported-issues.component.html',
  styleUrl: './reported-issues.component.css',
})
export class ReportedIssuesComponent implements OnInit {
  reworkRequests: any[] = [];
  loading: boolean = true;

  // For modal
  showEditModal: boolean = false;
  selectedRequest: any = null;
  newAction: string = '';

  private readonly BASE_URL = 'http://localhost:8689/report'; // Backend URL

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getReworkRequests();
  }

  // Fetch all requests
  getReworkRequests(): void {
    this.loading = true;
    this.http.get(`${this.BASE_URL}/getAll`).subscribe(
      (data: any) => {
        this.reworkRequests = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching rework requests:', error);
        this.loading = false;
      }
    );
  }

  // Open edit modal
  openEditModal(request: any): void {
    this.selectedRequest = { ...request };
    this.newAction = request.action; // Populate current action
    this.showEditModal = true;
  }

  // Close modal
  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedRequest = null;
    this.newAction = '';
  }

  // Update action
  updateAction(): void {
    if (!this.selectedRequest) return;

    const id = this.selectedRequest.id; // Ensure this matches your backend's ID field
    this.http
      .put(`${this.BASE_URL}/updatedRequest/${id}`, null, {
        params: { status: this.newAction },
      })
      .subscribe(
        (updatedRequest: any) => {
          // Update the local data with the updated request
          this.reworkRequests = this.reworkRequests.map((req) =>
            req.id === id ? updatedRequest : req
          );
          this.closeEditModal();
        },
        (error) => {
          console.error('Error updating action:', error);
        }
      );
  }
}
