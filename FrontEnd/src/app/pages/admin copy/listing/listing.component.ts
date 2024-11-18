import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferingServicesService } from '../../../services/offering-services.service';
import { FormsModule } from '@angular/forms';

interface Listing {
  id: number;
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
  listings: Listing[] = [];
  newListing: Listing = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    image_url: '',
    user_id: ''
  };
  showAddModal: boolean = false;
  currentPage = 1;
  totalPages = 1;
  loading = false;

  constructor(private adminService: OfferingServicesService) {}

  ngOnInit() {
    this.loadListings();
  }

  loadListings() {
    this.loading = true;
    this.adminService.getAllServices().subscribe({
      next: (response) => {
        console.log(response);
        this.listings = response;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading listings:', error);
        this.loading = false;
      },
    });
  }

  openAddModal() {
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }
  addListing() {
    this.adminService.addNewService(this.newListing).subscribe({
      next: (response) => {
        this.loadListings(); // Reload listings to include the new listing
        this.newListing = { id: 0, title: '', description: '', price: 0, image_url: '', user_id: '' }; // Reset form
        this.closeAddModal();
      },
      error: (error: Error) => {
        console.error('Error adding listing:', error);
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

  editListing(id: number) {
    this.adminService.editServiceById(id, {}).subscribe({
      next: (service) => {
        console.log('Edit service:', service);
      },
      error: (error) => {
        console.error('Error getting service details:', error);
      },
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
