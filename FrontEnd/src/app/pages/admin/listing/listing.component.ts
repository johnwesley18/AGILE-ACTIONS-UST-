import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../services/admin.service';
import { OfferingServicesService } from '../../../services/offering-services.service';
import { FormsModule } from '@angular/forms';

interface Listing {
  _id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
  user_id: string;
}

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class ListingComponent implements OnInit {
openAddModal() {
throw new Error('Method not implemented.');
}
closeAddModal() {
throw new Error('Method not implemented.');
}
newListing: any;
addListing() {
throw new Error('Method not implemented.');
}
  
  listings: any[] = [];
  currentPage = 1;
  totalPages = 1;
  loading = false;
showAddModal: any;

  constructor(private adminService: OfferingServicesService) {}

  ngOnInit() {
    this.loadListings();
  }

  loadListings() {
    this.loading = true;
    this.adminService.getAllServices().subscribe({
      next: (response) => {
        this.listings = response;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading listings:', error);
        this.loading = false;
      },
    });
  }

  deleteListing(id: number) {
    if (confirm('Are you sure you want to delete this listing?')) {
      this.adminService.deleteServiceById(id).subscribe({
        next: () => {
          this.loadListings();
        },
        error: (error) => {
          console.error('Error deleting listing:', error);
        },
      });
    }
  }

  editListing(id:number) {
    this.adminService.editServiceById(id,{}).subscribe({
      next: (service) => {
        // Navigate to edit page or open edit modal
        console.log('Edit service:', service);
      },
      error: (error) => {
        console.error('Error getting service details:', error);
      }
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadListings();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadListings();
    }
  }
}
