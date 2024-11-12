import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule for hyperlinks
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  imports: [CommonModule, RouterModule] // Add CommonModule and RouterModule for standalone setup
})
export class ServicesComponent {
  popularServices = [
    { 
      title: 'Home Cleaning', 
      image: 'https://scrubnbubbles.com/wp-content/uploads/2022/05/cleaning-service.jpeg' // Placeholder for Home cleaning
    },
    { 
      title: 'Furniture Assembly', 
      image: 'https://tse4.mm.bing.net/th/id/OIP.wYx8zJdkm4ZKC4D8wuNAiwHaE8?rs=1&pid=ImgDetMain' // Placeholder for Furniture assembly
    },
    { 
      title: 'Plumbing Service', 
      image: 'https://tse1.mm.bing.net/th/id/OIP.rrS1D2mztOgAeFiLX3n1LQHaE8?rs=1&pid=ImgDetMain' // Placeholder for Plumbing service
    },
    { 
      title: 'Electrical Service', 
      image: 'https://tse2.mm.bing.net/th/id/OIP.A_yHsYsvqMBb0UvXFV9LNwHaE8?rs=1&pid=ImgDetMain' // Placeholder for Electrical service
    },
    { 
      title: 'Smart Home Service', 
      image: 'https://tse4.mm.bing.net/th/id/OIP.Kp4TOHnGw737PYyZHJVzKwHaD9?rs=1&pid=ImgDetMain' // Placeholder for Smart home service
    },
    { 
      title: 'Moving Service', 
      image: 'https://tse3.mm.bing.net/th/id/OIP.3dK4LIZ_IsLTGFYhAMzIVgHaEK?rs=1&pid=ImgDetMain' // Placeholder for Moving service
    },
    { 
      title: 'Tutoring', 
      image: 'https://th.bing.com/th/id/OIP.oUsArir-NWmmjK1JLpdLUwHaE8?rs=1&pid=ImgDetMain' // Placeholder for Moving service
    },
    { 
      title: 'Landscaping', 
      image: 'https://tse4.mm.bing.net/th/id/OIP.uegpYOADdivIMbVt3aCtUwHaE0?rs=1&pid=ImgDetMain' // Placeholder for Moving service
    },
    { 
      title: 'Home Repair', 
      image: 'https://thumbs.dreamstime.com/b/home-service-repair-construction-fix-house-background-home-service-repair-construction-fix-house-background-155882678.jpg' // Placeholder for Moving service
    },
    { 
      title: 'Home Renovation', 
      image: 'https://tse3.mm.bing.net/th/id/OIP.t6fUPKF9G9WoP4Z6NXW5agHaE7?rs=1&pid=ImgDetMain' // Placeholder for Moving service
    },
    { 
      title: 'Personal Care', 
      image: 'https://tse2.mm.bing.net/th/id/OIP.EaZCNCVGcxakWMShtnUdxgHaEK?rs=1&pid=ImgDetMain' // Placeholder for Moving service
    },
    { 
      title: 'Painting', 
      image: 'https://tse3.mm.bing.net/th/id/OIP.-QUjwf8zVFykzb0VRdnwrQHaDt?rs=1&pid=ImgDetMain' // Placeholder for Moving service
    },
  ];

  cleaningServices = [
    { 
      title: 'Home Cleaning', 
      image: 'https://tse3.mm.bing.net/th/id/OIP.4sQXSQ4DMrzDI0lGYv65CwHaE8?rs=1&pid=ImgDetMain' // Placeholder for Home cleaning
    },
    { 
      title: 'Office Cleaning', 
      image: 'https://www.healthyhomesutah.com/wp-content/uploads/Professional-House-Cleaning-Services-in-North-Ogden-Utah.jpg' // Placeholder for Office cleaning
    },
    { 
      title: 'Rental Home Cleaning', 
      image: 'https://tse1.mm.bing.net/th/id/OIP.wA6yCKRMN3E3tg5t_wsEnwHaEK?rs=1&pid=ImgDetMain' // Placeholder for Rental home cleaning
    }
  ];

  categories = [
    { name: 'Popular', link: '/services' },
    { name: 'Cleaning', link: '/services' },
    { name: 'TV and Electronics', link: '#tv-electronics' },
    { name: 'Assembly', link: 'services/service-detail/Furniture Assembly' },
    { name: 'General Handyman', link: '#handyman' },
    { name: 'Plumbing', link: 'services/service-detail/Plumbing Service' },
    { name: 'Electrical', link: 'services/service-detail/Electrical Service' },
    { name: 'Painting', link: 'services/service-detail/Painting' },
    { name: 'Moving', link: 'services/service-detail/Moving Service' },
    { name: 'Smart Home', link: 'services/service-detail/Smart Home Service' },
    { name: 'Window Treatments', link: '#window-treatments' }
  ];
  
  constructor(private router: Router) { }

  viewServiceDetail(service: any) {
    this.router.navigate(['/services/service-detail', service.title]);  // Pass the service title as a parameter
  }
}
