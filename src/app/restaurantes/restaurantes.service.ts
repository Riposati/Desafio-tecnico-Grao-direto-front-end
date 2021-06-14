import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class RestaurantesService {

  constructor(private Http: HttpClient) { }

  myObj : any

  showAll(){
    this.Http.get('http://localhost:3000/restaurantes')
    .subscribe(response => {
      this.myObj =  response
      //console.log(this.myObj)
    })
  }

  showOne(restaurante: any){
  this.Http.get(`http://localhost:3000/restaurantes/${restaurante}`)
    .subscribe(response => {
      this.myObj = response
      console.log(this.myObj)
    })

  }
}
