import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProductoI } from 'src/app/models/TipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-list-tipo-producto',
  templateUrl: './list-tipo-producto.component.html',
  styleUrls: ['./list-tipo-producto.component.css']
})
export class ListTipoProductoComponent {
  public tipoProducto: TipoProductoI[] = []
  constructor(
    private tipoProductoService: TipoProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.tipoProductoService.getAllTipoProducto()
      .subscribe({
        next: (data) => {
          this.tipoProducto = data.tipoproducto
          console.log(this.tipoProducto)
        }
      })
  }
}
