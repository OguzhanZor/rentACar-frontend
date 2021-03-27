import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/Dtos/carDetailDto';
import { CarImage } from 'src/app/models/entities/carImage';
import { CarService } from 'src/app/services/car-service/car.service';
import { CarImageService } from 'src/app/services/carImage-service/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetailDto[]=[];
  carImages:CarImage[]=[];
  dataLoaded=false;

  constructor(private carService:CarService,
              private carImageService:CarImageService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getCarDetailsByCarId(params["carid"]);
      this.getCarImagesByCarId(params["carid"]);
    })
  }
  
  getCarDetailsByCarId(carid:number){
    this.carService.getCarsDetail(carid).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
  
  getCarImagesByCarId(carid:number){
    this.carImageService.getImagesByCarId(carid).subscribe(response=>{
      this.carImages=response.data;
      this.dataLoaded=true;
    })
  }

}
