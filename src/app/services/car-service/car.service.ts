import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/entities/car';
import { CarDetailDto } from 'src/app/models/Dtos/carDetailDto';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44306/api/cars/";

  constructor(private httpClient:HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let request:string =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Car>>(request);
  }

  getCarsDetail():Observable<ListResponseModel<CarDetailDto>>{
    let request: string =this.apiUrl+"GetCarDetails";
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(request);
  }
}
