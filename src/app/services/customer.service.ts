import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() {}

  // Sample method to get customers
  getCustomers() {
    return [
      { id: 1, name: 'Customer 1' },
      { id: 2, name: 'Customer 2' },
      { id: 3, name: 'Customer 3' },
    ];
  }
}
