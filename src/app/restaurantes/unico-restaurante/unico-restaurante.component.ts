import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unico-restaurante',
  templateUrl: './unico-restaurante.component.html',
  styleUrls: ['./unico-restaurante.component.css']
})
export class UnicoRestauranteComponent implements OnInit {

  constructor(private RestaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute,private _router: Router) { }

  isLogin: boolean = false

  ngOnInit(): void {
    let restauranteId = this.activatedRoute.snapshot.params.restauranteId;
    this.getOne(restauranteId)

    if( this.activatedRoute.snapshot.params.restauranteId ){
      let v = document.getElementById('divAux');
      if (v !== null) {
        v.remove() 
      }
    }
    this.verifyLogin()
  }

  get myObj(){
    return this.RestaurantesService.myObj
  }

  getOne(restaurante: any){
    this.RestaurantesService.showOne(restaurante)
  }

  verifyLogin(){
    if(localStorage.getItem('currentUser') !== null){
      this.isLogin = true
    }

    if(this.isLogin===false)
        this._router.navigate(['login'])
  }
}
