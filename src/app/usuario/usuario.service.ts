import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurantesService } from 'src/app/restaurantes/restaurantes.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private Http: HttpClient,private RestaurantesService: RestaurantesService,private _router: Router) { }

  myObj : any
  resp: any
  isLogin: boolean = false
  v2 : any

  verificaUser(formValue: any, v2: any){

    this.v2 = v2

    console.log('your form data inside service: ', formValue)

    this.Http.post(`http://localhost:3000/login`, formValue)
    .subscribe(response => {
      this.myObj =  response
      console.log(this.myObj)

      this.resp = this.myObj
    
      if(this.resp !== undefined && this.resp.resposta == 1){

        localStorage.setItem('currentUser', this.myObj.email);
        this.isLogin = true
        this.RestaurantesService.showAll()  
        let v = document.getElementById('login-form');
        if (v !== null) {
          v.remove() 
        }
        this._router.navigate(['restaurantes'])
        this.refresh()
      }

      if(localStorage.getItem('currentUser') !== null){

        if(this.v2 !== null){
          this.v2.style.display = "none"
        }
  
      }else{
          //alert('Login inválido!')
          if(this.v2 !== null){
          this.v2.style.display = "block"
        }
      }

    })
  }

  refresh(): void {
    window.location.reload();
  }
}
