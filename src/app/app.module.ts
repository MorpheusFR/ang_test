import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FormsModule } from '@angular/forms';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { ClientsDetailsComponent } from './components/clients-details/clients-details.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientsListComponent,
    ClientsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
