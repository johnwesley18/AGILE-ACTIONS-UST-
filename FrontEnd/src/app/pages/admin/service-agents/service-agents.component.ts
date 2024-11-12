import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-service-agents',
  templateUrl: './service-agents.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class ServiceAgentsComponent implements OnInit {
editAgent(arg0: any) {
throw new Error('Method not implemented.');
}
  serviceAgents: any[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;

  showAddModal = false; // Control for add modal visibility
  newAgent = {
    available: true,
    location: '',
    profession_details: '',
    rating: null,
    total_bookings: 0,
    user_id: '',
    zip: ''
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadServiceAgents();
  }

  loadServiceAgents() {
    this.loading = true;
    this.adminService.getServiceAgents(this.currentPage).subscribe({
      next: (response) => {
        this.serviceAgents = response.data;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading service agents:', error);
        this.loading = false;
      }
    });
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
    this.resetNewAgent(); // Reset the form data when closing
  }

  resetNewAgent() {
    this.newAgent = {
      available: true,
      location: '',
      profession_details: '',
      rating: null,
      total_bookings: 0,
      user_id: '',
      zip: ''
    };
  }

  addAgent() {
    console.log(this.newAgent);
    if (this.newAgent.location && this.newAgent.profession_details && this.newAgent.user_id && this.newAgent.zip) {
      this.adminService.addServiceAgent(this.newAgent).subscribe({
        next: () => {
          this.loadServiceAgents();
          this.closeAddModal();
        },
        error: (error: any) => {
          console.error('Error adding new agent:', error);
        }
      });
    } else {
      alert('Please fill all required fields.');
    }
  }
  deleteAgent(id: string): void {
    this.adminService.deleteServiceAgent(id).subscribe({
      next: () => this.loadServiceAgents(),
      error: (error: Error) => console.error('Error deleting agent:', error)
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadServiceAgents();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadServiceAgents();
    }
  }
}
