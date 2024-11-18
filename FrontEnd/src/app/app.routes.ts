import { Routes } from '@angular/router';
import { BecomeProComponent } from './pages/become-pro/become-pro.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AppEntryComponent } from './pages/app-entry/app-entry.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminDashboardComponent } from './pages/admin copy/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/admin copy/admin-login/admin-login.component';
import { ListingComponent } from './pages/admin copy/listing/listing.component';
import { RefundsComponent } from './pages/admin copy/refunds/refunds.component';
import { ReportedIssuesComponent } from './pages/admin copy/reported-issues/reported-issues.component';
import { ReworkRequestsComponent } from './pages/admin copy/rework-requests/rework-requests.component';
import { ServiceAgentsComponent } from './pages/admin copy/service-agents/service-agents.component';
import { ReviewComponent } from './pages/admin copy/review/review.component';
import { RaiseComponent } from './pages/admin copy/raise/raise.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'BecomePro', component: BecomeProComponent },
  { path: 'services', component: ServicesComponent }, // Corrected path here
  { path: 'LogIn', component: LoginComponent }, // Corrected path here
  { path: 'Help', component: FaqComponent },
  { path: 'services/service-detail/:title', component: ServiceDetailComponent }, // Corrected path here
  { path: 'success', component: SuccessComponent}, // Corrected path here
  { path: 'cancel', component: CancelComponent}, 
  { path: 'dashboard',component:DashboardComponent}, //
  { path: 'signup',component:SignupComponent}, //
  { path: 'auth',component:AppEntryComponent}, //
  { path: 'cart',component:CartComponent}, //
  // Admin routes
  { path: 'admin/login', component: AdminLoginComponent },
  { 
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'service-agents',
        pathMatch: 'full'
      },
      {
        path: 'service-agents',
        component: ServiceAgentsComponent
      },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'service-agents', component: ServiceAgentsComponent },
      { path: 'refunds', component: RefundsComponent },
      { path: 'rework-requests', component: ReworkRequestsComponent },
      { path: 'reported-issues', component: ReportedIssuesComponent },
      {path:'service-listing',component:ListingComponent},
      {path:'review',component:ReviewComponent},
      {path:'raise',component:RaiseComponent}
    ]
  }
  // other routes
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }