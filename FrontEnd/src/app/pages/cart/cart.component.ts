import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ValidActions = 'Raise Ticket' | 'Refund Request' | 'Rework Request' | 'Report Issue';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [NgIf, NgFor, FormsModule, CommonModule],
})
export class CartComponent implements OnInit {
  bookings: any[] = [];
  backendUrl: string = 'http://localhost:8689/api/reviews/submit';

  constructor(
    private bookingService: BookingService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.getToken() == null) {
      alert('Please log in to view your cart.');
      this.router.navigate(['/auth']);
      return;
    }
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.getUserBookings().subscribe({
      next: (data: any[]) => {
        this.bookings = data.map((booking) => ({
          ...booking,
          review: { rating: null, description: '' },
          showReviewModal: false,
          modalVisible: false,
          modalDescription: '',
          currentAction: null,
        }));
      },
      error: (error: unknown) => {
        console.error('Error fetching bookings:', error);
        alert('There was an error fetching your bookings. Please try again.');
      },
    });
  }

  done(booking: any): void {
    alert(`Booking with ID: ${booking.serviceId} marked as done.`);
  }

  isReviewValid(booking: any): boolean {
    return booking.review.rating && booking.review.description;
  }

  submitReview(booking: any): void {
    if (!this.isReviewValid(booking)) {
      alert('Please provide a rating and review description before submitting.');
      return;
    }

    const userId = this.authService.getUserId();
    const serviceId = booking.serviceId;
    const professionalId = booking.serviceProviderId;

    if (!serviceId) {
      alert('Service ID is missing. Cannot submit review.');
      return;
    }

    const reviewPayload = {
      userId: userId ,
      providerId:professionalId ,
      serviceId:serviceId ,
      rating: booking.review.rating,
      reviewText: booking.review.description,
    };

    this.http.post(this.backendUrl, reviewPayload).subscribe({
      next: () => {
        alert('Review submitted successfully!');
        this.fetchBookings();
      },
      error: (error) => {
        console.error('Error submitting review:', error);
        alert('There was an error submitting your review. Please try again.');
      },
    });
  }

  openReviewModal(booking: any): void {
    booking.showReviewModal = true;
  }

  closeReviewModal(booking: any): void {
    booking.showReviewModal = false;
  }

  openModal(action: ValidActions, booking: any): void {
    booking.currentAction = action;
    booking.modalVisible = true;
    booking.modalDescription = '';
  }

  closeModal(booking: any): void {
    booking.modalVisible = false;
    booking.modalDescription = '';
  }

  submitModalAction(booking: any): void {
    if (!booking.modalDescription) {
      alert('Please provide a description before submitting.');
      return;
    }

    const userId = this.authService.getUserId();
    const payload = {
      userId: userId,
      serviceId: booking.serviceId,
      action: booking.currentAction,
      serviceDesc: booking.modalDescription,
    };

    const actionToEndpointMap: Record<ValidActions, string> = {
      'Raise Ticket': 'http://localhost:8689/raise/saveRequest',
      'Refund Request': 'http://localhost:8689/refund/saveRequest',
      'Rework Request': 'http://localhost:8689/rework/saveRequest',
      'Report Issue': 'http://localhost:8689/report/saveRequest',
    };

    const endpoint = actionToEndpointMap[booking.currentAction as ValidActions];

    if (!endpoint) {
      alert('Invalid action.');
      return;
    }

    this.http.post(endpoint, payload).subscribe({
      next: () => {
        alert(`${booking.currentAction} submitted successfully!`);
        this.closeModal(booking);
      },
      error: (error) => {
        console.error('Error submitting action:', error);
        alert('There was an error submitting your request. Please try again.');
      },
    });
  }
}
