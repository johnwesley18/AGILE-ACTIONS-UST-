import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RefundsComponent implements OnInit {
newRefund: any;
showAddModal: any;
closeAddModal() {
throw new Error('Method not implemented.');
}
addRefund() {
throw new Error('Method not implemented.');
}
openAddModal() {
throw new Error('Method not implemented.');
}
  refunds: any[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadRefunds();
  }

  loadRefunds() {
    this.loading = true;
    this.adminService.getRefunds(this.currentPage).subscribe({
      next: (response) => {
        this.refunds = response.data;
        this.totalPages = response.totalPages;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading refunds:', error);
        this.loading = false;
      }
    });
  }

  processRefund(id: string, status: string) {
    this.adminService.processRefund(id, status).subscribe({
      next: () => {
        this.loadRefunds();
      },
      error: (error) => {
        console.error('Error processing refund:', error);
      }
    });
  }
}
