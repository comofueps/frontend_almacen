import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';
import { ListTipoProductoComponent } from './components/tipo-producto/list-tipo-producto/list-tipo-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { ListVentaComponent } from './components/ventas/list-venta/list-venta.component';
import { ListVentaPorProductoComponent } from './components/venta-por-producto/list-venta-por-producto/list-venta-por-producto.component';
import { AddTipoProductoComponent } from './components/tipo-producto/add-tipo-producto/add-tipo-producto.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { AddVentaComponent } from './components/ventas/add-venta/add-venta.component';

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

  {
    path: "tipo_producto",
    component: ListTipoProductoComponent
  },

  {
    path: "tipo_producto/add",
    component: AddTipoProductoComponent
  },

  {
    path: "productos",
    component: ListProductoComponent
  },

  {
    path: "productos/add",
    component: AddProductoComponent
  },

  {
    path: "ventas",
    component: ListVentaComponent
  },
  {
    path: "ventas/add",
    component: AddVentaComponent
  },
  {
    path: "ventas_por_productos",
    component: ListVentaPorProductoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
