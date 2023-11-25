import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VentaI } from '../models/Venta';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/ventas`
  base_path2 = `${this.api_uri_nodejs}/clientes`
  constructor(
    private http:HttpClient
  ) { }

  getAllVenta():Observable<{venta:VentaI[]}>{
    return this.http
      .get<{venta:VentaI[]}>(this.base_path)
  }

  getAllCliente():Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(this.base_path2)
  }

  createVenta(data: any):Observable<VentaI>{
    return this.http.post<VentaI>(this.base_path, data)
  }
}
