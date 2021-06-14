import { Component } from '@angular/core';
import { RestaurantesService } from './restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurante';

  searchFilter = '';
  query: any;
  p: number = 1;
  isLogin: boolean = false
  
  constructor(private RestaurantesService: RestaurantesService, private activatedRoute: ActivatedRoute,private _router: Router) { }
  
  ngOnInit(): void {
      if( this.activatedRoute.snapshot.params.restauranteId){ // se vem da tela de todos restaurantes

        this.RestaurantesService.showAll()  
      }
      this.verifyLogin()
  }

  get myObj(){
    return this.RestaurantesService.myObj
  }

  logout(){
    // this._auth.clearStorage()
    if(localStorage.getItem('currentUser') !== null){
      localStorage.removeItem('currentUser');
      this.isLogin = false
    }
    this._router.navigate(['login'])
  }

  verifyLogin(){
    if(localStorage.getItem('currentUser') !== null){
      this.isLogin = true
    }

    if(this.isLogin===false)
        this._router.navigate(['login'])
  }

}
