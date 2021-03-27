import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/entities/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
 
  apiUrl="https://localhost:44306/api/carimages/";

  constructor(private httpClient:HttpClient) { }

  getImages() : Observable<ListResponseModel<CarImage>>{
    let request:string =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(request);
  }
  getImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let request:string = this.apiUrl+"getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(request);
  }
}
