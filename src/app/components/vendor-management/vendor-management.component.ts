import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-management',
  templateUrl: './vendor-management.component.html',
  styleUrls: ['./vendor-management.component.css']
})
export class VendorManagementComponent {
  vendors: string[] = ['Vendor A', 'Vendor B'];

  addVendor(name: string): void {
    this.vendors.push(name);
  }

  removeVendor(name: string): void {
    this.vendors = this.vendors.filter(v => v !== name);
  }
}
