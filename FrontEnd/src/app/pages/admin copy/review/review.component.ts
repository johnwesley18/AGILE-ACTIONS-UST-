import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  reviews: {
    id: number;
    userId: number;
    providerId: number;
    rating: number;
    reviewText: string | null;
    reported: boolean;
    timestamp: string | null;
  }[] = [];
  isLoading: boolean = true;

  private apiUrl = 'http://localhost:8689/api/reviews/getAllReview';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(
      (data) => {
        this.reviews = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching reviews:', error);
        this.isLoading = false;
      }
    );
  }
}