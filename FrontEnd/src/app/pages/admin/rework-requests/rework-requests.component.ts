import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-rework-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rework-requests.component.html',
  styleUrl: './rework-requests.component.css'
})
export class ReworkRequestsComponent {
closeAddModal() {
throw new Error('Method not implemented.');
}
newRequest: any;
addRequest() {
throw new Error('Method not implemented.');
}
showAddModal: any;
openAddModal() {
throw new Error('Method not implemented.');
}
  loading = false;
reworkRequests: any;
rejectRequest(arg0: any) {
throw new Error('Method not implemented.');
}
approveRequest(arg0: any) {
throw new Error('Method not implemented.');
}

}
