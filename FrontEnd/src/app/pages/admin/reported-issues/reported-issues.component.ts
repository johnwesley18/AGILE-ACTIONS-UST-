import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportedIssuesService } from '../../../services/reported-issues.service';
@Component({
  selector: 'app-reported-issues',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reported-issues.component.html',
  styleUrl: './reported-issues.component.css',
})
export class ReportedIssuesComponent implements OnInit {
  newIssue: any;

  loading = false;
  reportedIssues: any[] = [];
  showAddModal: any;

  constructor(private reportedIssuesService: ReportedIssuesService) {}
  
  addIssue() {
    throw new Error('Method not implemented.');
  }

  openAddModal() {
    throw new Error('Method not implemented.');
  }

  closeAddModal() {
    throw new Error('Method not implemented.');
  }

  dismissIssue(issueId: string) {
    this.loading = true;
    // Call API to dismiss the issue
    // Example API call:
    this.reportedIssuesService.dismissIssue(issueId).subscribe({
      next: () => {
        this.reportedIssues = this.reportedIssues.filter(issue => issue._id !== issueId);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error dismissing issue:', error);
        this.loading = false;
      }
    });
  }

  resolveIssue(issueId: string) {
    this.loading = true;
    
    this.reportedIssuesService.resolveIssue(issueId).subscribe({
      next: () => {
        this.reportedIssues = this.reportedIssues.filter(issue => issue._id !== issueId);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error resolving issue:', error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
        this.loadIssues();
      }
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadIssues();
  }
  loadIssues() {
    this.reportedIssuesService.getAllIssues().subscribe((issues) => {
      this.reportedIssues = issues;
      this.loading = false;
    });
  }
}
