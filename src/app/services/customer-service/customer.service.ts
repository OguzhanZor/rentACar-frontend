import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/entities/customer';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44306/api/customers/";

  constructor(private httpClient:HttpClient) { }

  getCustomers() : Observable<ListResponseModel<Customer>>{
    let request:string =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Customer>>(request);
  }
}
