import { Component, OnInit } from "@angular/core";
import { Tickets } from '../tickets';
import { TicketsService } from '../tickets.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "tickets-app",
  templateUrl: "./tickets-app.component.html",
  styleUrls: ["./tickets-app.component.css"],
  providers: [TicketsService]
})
export class TicketsAppComponent implements OnInit {

  message = "Hi from tickets component"
  newTicket: Tickets = new Tickets();

  constructor(private ticketsService: TicketsService) {
  }

  addTicket() {
    this.ticketsService.addTicket(this.newTicket);
    this.newTicket = new Tickets();
  }

  toggleTicketComplete(ticket) {
    this.ticketsService.toggleTicketComplete(ticket);
  }

  removeTicket(ticket) {
    this.ticketsService.deleteTicketById(ticket.id);
  }

  get tickets() {
    return this.ticketsService.getAllTickets();
  }
  ngOnInit() {
  }

}
