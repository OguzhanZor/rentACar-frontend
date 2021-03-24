import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/entities/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44306/api/colors/";

  constructor(private httpClient:HttpClient) { }

  getColors() : Observable<ListResponseModel<Color>>{
    let request:string =this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<Color>>(request);
  }
}
