import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { UnicoRestauranteComponent } from './unico-restaurante/unico-restaurante.component';
import {RestaurantesService} from './restaurantes.service'


@NgModule({
  declarations: [
    TodosComponent,
    UnicoRestauranteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[

    TodosComponent,
    UnicoRestauranteComponent
  ],
  providers:[
    RestaurantesService
  ]
})
export class RestaurantesModule { }
