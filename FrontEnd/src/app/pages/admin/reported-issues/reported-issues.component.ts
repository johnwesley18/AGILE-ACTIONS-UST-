import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reported-issues',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reported-issues.component.html',
  styleUrl: './reported-issues.component.css'
})
export class ReportedIssuesComponent {
closeAddModal() {
throw new Error('Method not implemented.');
}
newIssue: any;
addIssue() {
throw new Error('Method not implemented.');
}
showAddModal: any;
openAddModal() {
throw new Error('Method not implemented.');
}
  loading = false;
  reportedIssues: any[] = [];

  dismissIssue(issueId: string) {
    this.loading = true;
    // Call API to dismiss the issue
    // Example API call:
    // this.reportedIssuesService.dismissIssue(issueId).subscribe({
    //   next: () => {
    //     this.reportedIssues = this.reportedIssues.filter(issue => issue._id !== issueId);
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     console.error('Error dismissing issue:', error);
    //     this.loading = false;
    //   }
    // });
  }

  resolveIssue(issueId: string) {
    this.loading = true;
    // Call API to resolve the issue
    // Example API call:
    // this.reportedIssuesService.resolveIssue(issueId).subscribe({
    //   next: () => {
    //     this.reportedIssues = this.reportedIssues.filter(issue => issue._id !== issueId);
    //     this.loading = false;
    //   },
    //   error: (error) => {
    //     console.error('Error resolving issue:', error);
    //     this.loading = false;
    //   }
    // });
  }

}
