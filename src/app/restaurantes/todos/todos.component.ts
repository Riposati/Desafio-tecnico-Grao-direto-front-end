import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from '../restaurantes.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private RestaurantesService: RestaurantesService) { }

  ngOnInit(): void {
     this.RestaurantesService.showAll();
  }

  get myObj(){
    return this.RestaurantesService.myObj
  }

}
