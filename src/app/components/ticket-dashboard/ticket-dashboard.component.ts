import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service';

// Define the Ticket type
interface Ticket {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-ticket-dashboard',
  templateUrl: './ticket-dashboard.component.html',
  styleUrls: ['./ticket-dashboard.component.css']
})
export class TicketDashboardComponent implements OnInit {
  // Specify the type of tickets as Ticket[] (an array of Ticket objects)
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    // Ensure the service returns an array of Ticket objects
    this.tickets = this.ticketService.getTickets();
  }
}
