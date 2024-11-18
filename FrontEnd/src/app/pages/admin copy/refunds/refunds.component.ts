import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RefundsComponent implements OnInit {
  refunds: any[] = [];
  newRefund: any = {
    orderid: null,
    amount: null,
    reason: '',
    action: '',
    status: 'pending',
  };
  selectedRefund: any = null; // Holds the refund selected for editing
  loading = false;
  showAddModal = false;
  showEditModal = false;

  private getAllApiUrl = 'http://localhost:8689/refund/getAll';
  private saveRequestApiUrl = 'http://localhost:8689/refund/saveRequest';
  private updateStatusApiUrl = 'http://localhost:8689/refund/updateStatus'; // Update endpoint

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRefunds();
  }

  // Fetch all refunds
  fetchRefunds(): void {
    this.loading = true;
    this.http.get<any[]>(this.getAllApiUrl).subscribe(
      (data) => {
        this.refunds = data; // Populate refunds list
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching refunds:', error);
        this.loading = false;
      }
    );
  }

  openAddModal(): void {
    this.showAddModal = true;
  }

  closeAddModal(): void {
    this.showAddModal = false;
    this.resetNewRefund();
  }

  addRefund(): void {
    this.loading = true;
    this.http.post<any>(this.saveRequestApiUrl, this.newRefund).subscribe(
      (data) => {
        this.refunds.push(data); // Add the new refund to the list
        this.closeAddModal();
        this.loading = false;
      },
      (error) => {
        console.error('Error saving refund:', error);
        this.loading = false;
      }
    );
  }

  openEditModal(refund: any): void {
    this.selectedRefund = { ...refund }; // Make a copy of the refund object
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
    this.selectedRefund = null;
  }

  updateStatus(): void {
    if (!this.selectedRefund) return;

    const updatedStatus = this.selectedRefund.status === 'paid' ? 'unpaid' : 'paid';

    this.http
      .put<any>(`${this.updateStatusApiUrl}/${this.selectedRefund.id}`, null, {
        params: { status: updatedStatus },
      })
      .subscribe(
        (data) => {
          const index = this.refunds.findIndex((r) => r.id === data.id);
          if (index !== -1) {
            this.refunds[index] = data; // Update the list with the new status
          }
          this.closeEditModal();
        },
        (error) => {
          console.error('Error updating status:', error);
        }
      );
  }

  resetNewRefund(): void {
    this.newRefund = {
      orderid: '',
      amount: null,
      reason: '',
      action: '',
      status: 'pending',
    };
  }
}
