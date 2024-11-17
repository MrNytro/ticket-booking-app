import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  constructor() {}

  // Sample method to get vendors
  getVendors() {
    return [
      { id: 1, name: 'Vendor 1' },
      { id: 2, name: 'Vendor 2' },
      { id: 3, name: 'Vendor 3' },
    ];
  }
}
