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
closeAddModal() {
throw new Error('Method not implemented.');
}
newAgent: any;
addAgent() {
throw new Error('Method not implemented.');
}
showAddModal: any;
openAddModal() {
throw new Error('Method not implemented.');
}
deleteAgent(arg0: any) {
throw new Error('Method not implemented.');
}
editAgent(arg0: any) {
throw new Error('Method not implemented.');
}
  serviceAgents: any[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;

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

  approveAgent(id: string) {
    this.adminService.approveServiceAgent(id).subscribe({
      next: () => {
        this.loadServiceAgents();
      },
      error: (error) => {
        console.error('Error approving agent:', error);
      }
    });
  }
}
