import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { UsuarioService } from 'src/app/usuario/usuario.service';
import { RestaurantesService } from 'src/app/restaurantes/restaurantes.service'
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[

    LoginComponent
  ],
  providers:[
    UsuarioService,
    RestaurantesService
  ]
})
export class LoginModule { }
