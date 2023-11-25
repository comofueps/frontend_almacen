import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoI } from 'src/app/models/Producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent {
  public productos: ProductoI[] = []
  constructor(
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.productoService.getAllProducto()
      .subscribe({
        next: (data) => {
          this.productos = data.producto
          console.log(this.productos)
        }
      })
  }
}
