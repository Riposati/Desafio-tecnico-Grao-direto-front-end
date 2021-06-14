import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './restaurantes/todos/todos.component'
import { UnicoRestauranteComponent } from './restaurantes/unico-restaurante/unico-restaurante.component'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'restaurantes', component: TodosComponent },
  { path: 'restaurantes/:restauranteId', component: UnicoRestauranteComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
