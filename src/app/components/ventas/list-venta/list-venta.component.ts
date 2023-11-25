import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VentaI } from 'src/app/models/Venta';
import { VentaService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent {
  public ventas: VentaI[] = []
  constructor(
    private ventaService: VentaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarClientes()
  }

  mostrarClientes() {
    this.ventaService.getAllVenta()
      .subscribe({
        next: (data) => {
          this.ventas = data.venta
          console.log(this.ventas)
        }
      })
  }
}
