import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/Producto';
import { TipoProductoI } from '../models/TipoProducto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/productos`
  base_path2 = `${this.api_uri_nodejs}/tipoproductos`
  constructor(
    private http: HttpClient
  ) { }

  getAllProducto(): Observable<{ producto: ProductoI[] }> {
    return this.http
      .get<{ producto: ProductoI[] }>(this.base_path)
  }

  getAllTipoProducto(): Observable<{tipoproducto:TipoProductoI[]}>{
    return this.http
    .get<{ tipoproducto:TipoProductoI[] }>(this.base_path2)
  }

  createProducto(data: any): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.base_path, data)
  }
}
