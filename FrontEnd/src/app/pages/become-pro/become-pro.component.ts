import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuoteCardComponent } from '../../components/quote-card/quote-card.component';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-become-pro',
  templateUrl: './become-pro.component.html',
  styleUrls: ['./become-pro.component.css'],
  standalone: true,
  imports: [FormsModule, QuoteCardComponent, NgFor, CommonModule,ReactiveFormsModule]
})
export class BecomeProComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;
  
  // user = {
  //   professionDetails: '', // Updated to reflect current form structure
  //   location: '',
  //   zip: ''
  // };
  
  // professionOptions = [
  //   'Home Cleaning',
  //   'Furniture Assembly',
  //   'Plumbing Service',
  //   'Electrical Service',
  //   'Smart Home Service',
  //   'Moving Service',
  //   'Tutoring',
  //   'Landscaping',
  //   'Home Repair',
  //   'Home Renovation',
  //   'Personal Care',
  //   'Painting',
  // ];

  // cards = [
  //   {
  //     quote: "Joining this network has transformed my business. The support and resources provided have helped me grow my customer base significantly.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+1",
  //     name: "John Smith",
  //     description: "Plumbing Expert"
  //   },
  //   {
  //     quote: "This platform has made it easier for me to connect with clients. I’ve seen a noticeable increase in my bookings since I joined.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+2",
  //     name: "Sarah Johnson",
  //     description: "Home Cleaning Specialist"
  //   },
  //   {
  //     quote: "Being part of this network has not only improved my visibility but also my reputation in the community.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+3",
  //     name: "Mike Lee",
  //     description: "Electrical Contractor"
  //   },
  //   {
  //     quote: "The training and resources available have equipped me with the skills to provide better service to my clients.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+4",
  //     name: "Emily Davis",
  //     description: "Landscaping Professional"
  //   },
  //   {
  //     quote: "I appreciate the community support and networking opportunities that have come from being a part of this service provider network.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+5",
  //     name: "David Brown",
  //     description: "HVAC Technician"
  //   },
  //   {
  //     quote: "This network has helped me streamline my operations and focus more on what I love—serving my customers.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+6",
  //     name: "Jessica Taylor",
  //     description: "Home Renovation Specialist"
  //   },
  //   {
  //     quote: "The flexibility and support from this network have allowed me to grow my business while maintaining a healthy work-life balance.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+7",
  //     name: "Alex Martinez",
  //     description: "Personal Trainer"
  //   },
  //   {
  //     quote: "Being a part of this community has opened new opportunities and connections that have been invaluable for my business.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+8",
  //     name: "Olivia Wilson",
  //     description: "Graphic Designer"
  //   },
  //   {
  //     quote: "The resources and exposure provided by this network have significantly boosted my business's growth and customer engagement.",
  //     profilePic: "https://via.placeholder.com/60?text=Profile+9",
  //     name: "Ethan Clark",
  //     description: "Carpenter"
  //   }
  // ];

  // constructor(private httpClient: HttpClient, private authService: AuthService,private router:Router) {}

  // onSubmit() {
  //   const userId = this.authService.getUserId();
  //   if (userId) {
  //     const apiUrl = `http://localhost:9099/api/professionals/register/${userId}`; // Append userId to the URL

  //     this.httpClient.post(apiUrl, this.user).subscribe(
  //       (response) => {
  //         console.log('Provider applied successfully', response);
  //         alert("Application Submitted Successfully!");
  //       },
  //       (error) => {
  //         console.error('Error occurred during application', error);
  //         alert("Application Failed! Please try again after registration or  Loging in");
  //         this.router.navigate(['/auth'])
  //       }
  //     );
  //   } else {
  //     alert("User ID not found. Please log in.");
  //   }
  // }
  serviceForm: FormGroup=new FormGroup({});
  files: File[] = [];
  isDragging = false;
  professionOptions = [
    'Home Cleaning',
     'Furniture Assembly',
     'Plumbing Service',
     'Electrical Service',
     'Smart Home Service',
    'Moving Service',
     'Tutoring',
     'Landscaping',
     'Home Repair',
     'Home Renovation',
     'Personal Care',
     'Painting',
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.serviceForm = this.fb.group({
      location: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(50)]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      profession: ['', Validators.required],
      image_url:['',Validators.required]
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    this.files = Array.from(files);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files) {
      this.files = Array.from(files);
    }
  }

  onSubmit() {
    if (this.serviceForm.valid) {
      const formData = new FormData();
      Object.keys(this.serviceForm.value).forEach(key => {
        formData.append(key, this.serviceForm.value[key]);
      });
      this.files.forEach(file => {
        formData.append('files', file);
      });
      // Handle form submission here
      console.log('Form Data:', formData);
    } else {
      this.markFormGroupTouched(this.serviceForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
}