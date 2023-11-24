import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ClienteI } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
 
  public clientes: ClienteI[] = []
  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          console.log(this.clientes)
        }
      })
  }
}
