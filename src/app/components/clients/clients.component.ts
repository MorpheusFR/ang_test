import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
 
  // clients = CLIENTS;
 
  selectedHero: Client;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(client: Client): void {
    this.selectedHero = client;
  }
}