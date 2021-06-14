import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { RestaurantesService } from 'src/app/restaurantes/restaurantes.service'
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  isLogin: boolean = false
  errorMessage : any
  v2 : any
  resp: any

  constructor(private myDiv: ElementRef<HTMLElement>, private RestaurantesService: RestaurantesService,private UsuarioService: UsuarioService, private _router: Router) {
   }

  ngOnInit(): void {
    //this.isUserLogin()
    this.verifyLogin()
    
  }

  ngAfterViewInit():void{
    this.v2 = document.getElementById('login-error'); 
    if(this.v2 !== null){
      this.v2.style.display = "none"
    }
  }

  onSubmit(form: NgForm){

    // console.log('your form data : ', form.value)
    this.UsuarioService.verificaUser(form.value, this.v2) 

  }
  

  get myObj(){
    return this.UsuarioService.myObj
  }

  verifyLogin(){
    if(localStorage.getItem('currentUser') !== null){
      this._router.navigate(['restaurantes'])
    }
  }

  refresh(): void {
    window.location.reload();
  }

}
