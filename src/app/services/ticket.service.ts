import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor() {}

  // Sample method to simulate ticket booking
  getTickets() {
    return [
      { id: 1, name: 'Ticket 1', price: 100 },
      { id: 2, name: 'Ticket 2', price: 200 },
      { id: 3, name: 'Ticket 3', price: 300 },
    ];
  }
}
