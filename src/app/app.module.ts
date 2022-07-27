import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Paginas/menu/menu.component';
import { NotificacaoComponent } from './Paginas/notificacao/notificacao.component';
import { HomeComponent } from './Paginas/home/home.component';
import { CarteiraComponent } from './Paginas/carteira/carteira.component';
import { AnalisesComponent } from './Paginas/analises/analises.component';
import { LoginComponent } from './Paginas/login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotificacaoComponent,
    HomeComponent,
    CarteiraComponent,
    AnalisesComponent,
    LoginComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
