
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Component } from "@angular/core";
import { TicketsAppComponent } from './tickets-app/tickets-app.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Odoo-offline App";
}
