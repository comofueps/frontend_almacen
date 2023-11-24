import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/clientes`
  constructor(
    private http:HttpClient
  ) { }

  getAllCliente():Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(this.base_path)
  }

  createCliente(data: any):Observable<ClienteI>{
    return this.http.post<ClienteI>(this.base_path, data)
  }
}
