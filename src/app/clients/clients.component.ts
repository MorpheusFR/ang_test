import { Component, OnInit } from '@angular/core';
import { Client } from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
// export class ClientsComponent implements OnInit {
//   client: Client = { 
//     general: Array<"general">,
//     job: Array<"job">,
//     contact: Array<"contact">,
//     address: Array<"address">, 
//     // id: 1,
//     // name: 'Windstorm'
//   };
  
//   constructor() { }

//   ngOnInit() {
//   }

// }
export class ClientsComponent implements OnInit {
 
  heroes = CLIENTS;
 
  selectedHero: Client;
 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(client: Client): void {
    this.selectedHero = client;
  }
}