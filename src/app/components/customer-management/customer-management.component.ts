import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent {
  customers: any[] = [
    { name: 'Nytro', isVip: false },
    { name: 'Jane Doe', isVip: false }
  ];

  toggleVip(customer: any): void {
    customer.isVip = !customer.isVip;
  }
}
