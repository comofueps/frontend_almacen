import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ListClienteComponent } from './components/cliente/list-cliente/list-cliente.component';
import { AddClienteComponent } from './components/cliente/add-cliente/add-cliente.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Table, TableModule } from 'primeng/table';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListTipoProductoComponent } from './components/tipo-producto/list-tipo-producto/list-tipo-producto.component';
import { AddTipoProductoComponent } from './components/tipo-producto/add-tipo-producto/add-tipo-producto.component';
import { ListProductoComponent } from './components/producto/list-producto/list-producto.component';
import { AddProductoComponent } from './components/producto/add-producto/add-producto.component';
import { ListVentaComponent } from './components/ventas/list-venta/list-venta.component';
import { AddVentaComponent } from './components/ventas/add-venta/add-venta.component';
import { AddVentaPorProductoComponent } from './components/venta-por-producto/add-venta-por-producto/add-venta-por-producto.component';
import { ListVentaPorProductoComponent } from './components/venta-por-producto/list-venta-por-producto/list-venta-por-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ContentComponent,
    FooterComponent,
    ListClienteComponent,
    AddClienteComponent,
    ListTipoProductoComponent,
    AddTipoProductoComponent,
    ListProductoComponent,
    AddProductoComponent,
    ListVentaComponent,
    AddVentaComponent,
    AddVentaPorProductoComponent,
    ListVentaPorProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    MenubarModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
