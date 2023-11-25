import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteI } from 'src/app/models/Cliente';
import { VentaI } from 'src/app/models/Venta';
import { VentaService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-add-venta',
  templateUrl: './add-venta.component.html',
  styleUrls: ['./add-venta.component.css']
})
export class AddVentaComponent {
  public clientes: ClienteI[] = [];
  public form: FormGroup = this.formBuilder.group({
    fechaVenta: ['', [Validators.required]],
    subtotal: ['', [Validators.required]],
    impuestos: ['', [Validators.required]],
    descuentos: ['', [Validators.required]],
    total: ['', [Validators.required]],
    ClienteId: ['', [Validators.required]],

  });
  constructor(
    private formBuilder: FormBuilder,
    private ventaService: VentaService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mostrarClientes();
  }

  mostrarClientes() {
    this.ventaService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          console.log(this.clientes)
        }
      })
  }



  onSubmit(): void {
    const formValue: VentaI = this.form.value;
    console.log(formValue);
    this.ventaService.createVenta(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/ventas');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/ventas');
  }

  get fechaVenta() { return this.form.get('fechaVenta'); }
  get subtotal() { return this.form.get('subtotal'); }
  get impuestos() { return this.form.get('impuestos'); }
  get descuentos() { return this.form.get('descuentos'); }
  get total() { return this.form.get('total'); }
  get ClienteId() { return this.form.get('ClienteId'); }
}
