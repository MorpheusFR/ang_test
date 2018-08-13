import { Component, OnInit } from '@angular/core';
import { ClientsService } from "app/components/service/";
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [ClientsService]
})
export class ClientsComponent implements OnInit {
  filter: string;
  clients: Client[] = [];
  client: Client;
  constructor( private clientsService: ClientsService) { }

  ngOnInit() {
    this.clientsService.getData()
    .subscribe(data => {
      this.clients = data;
    });
  }
  showSelectedClient(client) {
    this.client = client;
  }
  get filteredClients(): Client[] {
    return this.clients.filter(
       item => this.filter ? this.searchClientData(item, this.filter.toLowerCase()) : true
    );
  }

  searchClientData(client: Client, filter: string): boolean {
    return Object.keys(client).some(k => {
      return Object.keys(client[k]).some(l => {
        return l !== 'avatar' && client[k][l].toLowerCase().includes(filter);
      });
    });
  }
}

// import { Component, OnInit } from '@angular/core';
// import { Client } from '../client';

// @Component({
//   selector: 'app-clients',
//   templateUrl: './clients.component.html',
//   styleUrls: ['./clients.component.css']
// })

// export class ClientsComponent implements OnInit {
 
//   // clients = CLIENTS;
 
//   selectedHero: Client;
 
 
//   constructor() { }
 
//   ngOnInit() {
//   }
 
//   onSelect(client: Client): void {
//     this.selectedHero = client;
//   }
// }