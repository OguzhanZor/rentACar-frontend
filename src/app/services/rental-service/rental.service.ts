import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailDto } from 'src/app/models/Dtos/rentalDetailDto';
import { Rental } from 'src/app/models/entities/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44306/api/rentals/";

  constructor(private httpClient:HttpClient) { }

  getCustomers() : Observable<ListResponseModel<Rental>>{
    let request:string =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Rental>>(request);
  }

  getRentalDetail():Observable<ListResponseModel<RentalDetailDto>>{
    let request:string =this.apiUrl+"getrentaldetail";
    return this.httpClient.get<ListResponseModel<RentalDetailDto>>(request);
  }
}
