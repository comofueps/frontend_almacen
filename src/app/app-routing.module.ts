import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: "clientes",
    component: ListClienteComponent
  },

  {
    path: "clientes/add",
    component: AddClienteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
