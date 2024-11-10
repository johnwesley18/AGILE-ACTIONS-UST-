import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { BookingService } from '../../services/booking.service';

declare var Razorpay: any;

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule]
})
export class ServiceDetailComponent {
  serviceDetail: any;
  serviceDate: string = '';
  orderQuantity: number = 1;
  reviews: any[] = [];
  visibleReviews: any[] = [];
  showAllReviews: boolean = false;

  backendUrl: string = 'http://localhost:9099/reviews/service'; // API URL for fetching reviews
  backendUrll: string = 'http://localhost:3000/api'; // API URL for booking

  services = [
    { id: 1, title: 'Home Cleaning', description: 'Professional home cleaning services to make your home shine.', price: 120, image: 'https://www.apzomedia.com/wp-content/uploads/2020/02/How-House-Cleaning-Routine-Will-Change-Your-Life-1920x1280.jpeg' },
    { id: 2, title: 'Furniture Assembly', description: 'Get professional help to assemble your furniture quickly and efficiently.', price: 90, image: 'https://tse4.mm.bing.net/th/id/OIP.wYx8zJdkm4ZKC4D8wuNAiwHaE8?rs=1&pid=ImgDetMain' },
    { id: 3, title: 'Plumbing Service', description: 'Expert plumbing service to resolve any pipe or water-related issues.', price: 150, image: 'https://tse1.mm.bing.net/th/id/OIP.rrS1D2mztOgAeFiLX3n1LQHaE8?rs=1&pid=ImgDetMain' },
    { id: 4, title: 'Electrical Service', description: 'Certified electricians available to handle all your electrical needs.', price: 130, image: 'https://tse2.mm.bing.net/th/id/OIP.A_yHsYsvqMBb0UvXFV9LNwHaE8?rs=1&pid=ImgDetMain' },
    { id: 5, title: 'Smart Home Service', description: 'Upgrade your home with smart devices and automation solutions.', price: 200, image: 'https://tse4.mm.bing.net/th/id/OIP.Kp4TOHnGw737PYyZHJVzKwHaD9?rs=1&pid=ImgDetMain' },
    { id: 6, title: 'Moving Service', description: 'Let professionals help you move to your new home with ease.', price: 180, image: 'https://tse3.mm.bing.net/th/id/OIP.3dK4LIZ_IsLTGFYhAMzIVgHaEK?rs=1&pid=ImgDetMain' },
    { id: 7, title: 'Home Repair', description: 'Get expert help for all your home repair needs.', price: 150, image: 'https://thumbs.dreamstime.com/b/home-service-repair-construction-fix-house-background-home-service-repair-construction-fix-house-background-155882678.jpg' },
    { id: 8, title: 'Home Renovation', description: 'Transform your home with professional renovation services.', price: 300, image: 'https://tse3.mm.bing.net/th/id/OIP.t6fUPKF9G9WoP4Z6NXW5agHaE7?rs=1&pid=ImgDetMain' },
    { id: 9, title: 'Tutoring', description: 'Expert tutoring services for various subjects and levels.', price: 600, image: 'https://tse1.mm.bing.net/th/id/OIP.Czary5AeGciyjZ-q455hmwHaEc?rs=1&pid=ImgDetMain' },
    { id: 10, title: 'Personal Care', description: 'Professional personal care services including grooming and wellness.', price: 800, image: 'https://tse2.mm.bing.net/th/id/OIP.EaZCNCVGcxakWMShtnUdxgHaEK?rs=1&pid=ImgDetMain' },
    { id: 11, title: 'Landscaping', description: 'Create beautiful outdoor spaces with expert landscaping services.', price: 250, image: 'https://tse4.mm.bing.net/th/id/OIP.uegpYOADdivIMbVt3aCtUwHaE0?rs=1&pid=ImgDetMain' },
    { id: 12, title: 'Painting', description: 'Paint Your Homes Beautiful.', price: 250, image: 'https://tse3.mm.bing.net/th/id/OIP.-QUjwf8zVFykzb0VRdnwrQHaDt?rs=1&pid=ImgDetMain' },
  ];

  cleaningServices = [
    { id: 1, title: 'Home Cleaning', description: 'Professional home cleaning services to make your home shine.', price: 120, image: 'https://tse3.mm.bing.net/th/id/OIP.4sQXSQ4DMrzDI0lGYv65CwHaE8?rs=1&pid=ImgDetMain' },
    { id: 13, title: 'Office Cleaning', description: 'Office cleaning to ensure a hygienic work environment for your team.', price: 100, image: 'https://www.healthyhomesutah.com/wp-content/uploads/Professional-House-Cleaning-Services-in-North-Ogden-Utah.jpg' },
    { id: 14, title: 'Rental Home Cleaning', description: 'Thorough cleaning of your rental property to prepare it for new tenants.', price: 140, image: 'https://tse1.mm.bing.net/th/id/OIP.wA6yCKRMN3E3tg5t_wsEnwHaEK?rs=1&pid=ImgDetMain' }
  ];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private bookingService: BookingService
  ) {
    const serviceTitle = this.route.snapshot.paramMap.get('title');
    this.serviceDetail = this.services.concat(this.cleaningServices).find(service => service.title === serviceTitle);
    
    // Fetch reviews based on service ID
    if (this.serviceDetail) {
      this.fetchReviews(this.serviceDetail.id);
    }
  }

  fetchReviews(serviceId: number) {
    this.http.get<any[]>(`${this.backendUrl}/${serviceId}`).subscribe({
      next: (data) => {
        this.reviews = data;
        this.visibleReviews = this.reviews.slice(0, 3); // Show only the first 3 reviews initially
      },
      error: (error) => {
        console.error('Error fetching reviews:', error);
      }
    });
  }

  toggleReviews() {
    this.showAllReviews = !this.showAllReviews;
    this.visibleReviews = this.showAllReviews ? this.reviews : this.reviews.slice(0, 3);
  }

  getStars(rating: number) {
    return new Array(rating);
  }

  getEmptyStars(rating: number) {
    return new Array(5 - rating);
  }

  isDateValid(): boolean {
    const selectedDate = new Date(this.serviceDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }

  async placeOrder() {
    if (!this.serviceDate) {
      alert('Please select a date before placing your order.');
    } else if (!this.isDateValid()) {
      alert('Please select a present or future date.');
    } else if (this.authService.getToken() === null) {
      alert('Please log in to place an order.');
      this.router.navigate(['/auth']);
    } else {
      this.bookingService.setBookingDetails(
        this.serviceDate,
        this.serviceDetail.price,
        this.serviceDetail.title,
        this.serviceDetail.id
      );
      await this.createCheckoutSession();
    }
  }

  async createCheckoutSession() {
    const payload = {
      title: this.serviceDetail.title,
      quantity: this.orderQuantity,
      serviceDate: this.serviceDate,
    };
    const userId = this.authService.getUserId(); // Ensure this returns the correct user ID
    const serviceProviderId = 1; // Update this as necessary, or dynamically fetch the service provider ID if needed
    const address = this.authService.getAddress(); // Ensure this retrieves the user's address correctly
    // const { serviceDate, description, price, serviceId } = this.bookingDetails;
    let product = this.services.find(p => p.title === payload.title);
    if(!product){
      product = this.cleaningServices.find(p=>p.title===payload.title)
    }
    let price=product?.price ? product.price*payload.quantity:150*payload.quantity;
    this.http.post("http://localhost:9099/api/bookings",{...payload,userId,serviceProviderId,address,price:price,quantity:payload.quantity,serviceId:product?.id,description:product?.description,bookingTime:new Date(payload.serviceDate)}).subscribe({
      next:(data:any)=>{
        var options = {
          key: 'rzp_test_alc9PznICVvKQb',
          amount: data.transaction.amount/100,
          currency: 'INR',
          name: 'Agile Actions',
          description: 'Payment Transaction',
          image: 'https://example.com/your_logo',
          order_id: data.transaction.orderId,
          handler: function (response: any) {
            // These lines needs to be uncommented and need to send an
            // fetch request to verify the status of the payment
            // then redirect the user accordingly
            // alert('Payment Success'+response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            alert('Successfully Completed the Payment')
            window.location.href="/"
            return true;
          },
          prefill: {
            name: '',
            email: '',
            contact: '',
          },
          notes: {
            address: '',
          },
          theme: {
            color: '#3399cc',
          },
        };
        const rzp1 = new Razorpay(options);
    
        rzp1.open();
        rzp1.on('payment.failed', (response: any) => {
          alert('Payment failed: ' + response.error.description);
        });
      },
      error:(error)=>{
        console.log(error)
      }
    })

    // this.http.post<{ id: string }>(`${this.backendUrll}/checkout`, payload)
    //   .subscribe({
    //     next: async (response) => {
    //       try {
    //         localStorage.setItem('bookingDetails', JSON.stringify({
    //           serviceDate: this.serviceDate,
    //           price: this.serviceDetail.price,
    //           description: this.serviceDetail.title,
    //           serviceId: this.serviceDetail.id
    //         }));

    //         const stripe = await loadStripe('pk_test_51Q0H1aP3oMjdzaC3E7zAjR8bYLg9a0FTj82tJPr82TlLFDSMzLG9TsxACSAvwc71jfp40yYyaoMv7QF0omtEhDaB009yXRVueU');

    //         if (!stripe) {
    //           throw new Error('Stripe failed to load.');
    //         }

    //         const { error } = await stripe.redirectToCheckout({
    //           sessionId: response.id,
    //         });

    //         if (error) {
    //           alert(`Stripe error: ${error.message}`);
    //         }
    //       } catch (error) {
    //         console.error('Error in Stripe checkout:', error);
    //         alert('There was an error processing your order. Please try again.');
    //       }
    //     },
    //     error: (error) => {
    //       console.error('Error creating checkout session:', error);
    //       alert('There was an error processing your order. Please try again.');
    //     },
    //   });
  }
}
