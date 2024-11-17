import { Injectable } from '@angular/core';

// Define the Ticket type
interface Ticket {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // Provide some dummy tickets
  getTickets(): Ticket[] {
    return [
      { id: 1, name: 'Concert', price: 50 },
      { id: 2, name: 'Movie', price: 10 },
      { id: 3, name: 'Theater', price: 30 }
    ];
  }
}
