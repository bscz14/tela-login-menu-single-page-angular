import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalisesComponent } from './Paginas/analises/analises.component';
import { CarteiraComponent } from './Paginas/carteira/carteira.component';
import { HomeComponent } from './Paginas/home/home.component';
import { LoginComponent } from './Paginas/login/login.component';
import { MenuComponent } from './Paginas/menu/menu.component';
import { NotificacaoComponent } from './Paginas/notificacao/notificacao.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'notificacao',
    component: NotificacaoComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'carteira',
    component: CarteiraComponent,
  },

  {
    path: 'analises',
    component: AnalisesComponent,
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
