import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Client } from 'src/app/models/client.model';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {
  @Output() sendSelectedClient = new EventEmitter();
  @Input() clients: Client[];

  constructor() { }

  ngOnInit() {
  }
  selectClient(client: Client) {
    this.sendSelectedClient.emit(client);
  }

}
