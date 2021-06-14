import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FilterPipe } from './filter.pipe'
import { FormsModule}   from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination'
import {RestaurantesModule} from './restaurantes/restaurantes.module'
import {UsuarioModule} from './usuario/usuario.module'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { LoginModule } from './login/login.module'

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RestaurantesModule,
    UsuarioModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
