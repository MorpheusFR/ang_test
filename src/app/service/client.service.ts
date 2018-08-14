import { Injectable } from '@angular/core';
import { Client } from 'src/app/models/client.model';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pathToJSON = './clients.json';

  constructor(public http: HttpClient) { }

  getData(path: string = this.pathToJSON): Observable<Client[]> {
    return // this.http
    // .get(this.pathToJSON)
    // .map(data => data as Array<Client>)
    // .catch(this.handleError);
    this.http.get(this.pathToJSON).subscribe(data => 
      data as Array<Client> )//this.apps = result as Applications[];
    
  }
  // tslint:disable-next-line:no-any
  private handleError (error: any): Promise<any> {
    const errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }


}