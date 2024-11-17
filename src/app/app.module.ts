import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module'; // Add this import

import { AppComponent } from './app.component';
import { TicketDashboardComponent } from './components/ticket-dashboard/ticket-dashboard.component';
import { VendorManagementComponent } from './components/vendor-management/vendor-management.component';
import { CustomerManagementComponent } from './components/customer-management/customer-management.component';

import { TicketService } from './services/ticket.service';
import { VendorService } from './services/vendor.service';
import { CustomerService } from './services/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    TicketDashboardComponent,
    VendorManagementComponent,
    CustomerManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule  // Add this line
  ],
  providers: [TicketService, VendorService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }