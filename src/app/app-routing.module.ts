import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDashboardComponent } from './components/ticket-dashboard/ticket-dashboard.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';

const routes: Routes = [
  { path: 'ticket-dashboard', component: TicketDashboardComponent },
  { path: 'vendor-management', component: VendorManagementComponent },
  { path: 'customer-management', component: CustomerManagementComponent },
  { path: '', redirectTo: '/ticket-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }