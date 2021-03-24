import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/entities/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 
  apiUrl="https://localhost:44306/api/brands/";

  constructor(private httpClient:HttpClient) { }

  getBrands() : Observable<ListResponseModel<Brand>>{
    let request:string =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Brand>>(request);
  }

}
