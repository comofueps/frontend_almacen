import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoI } from 'src/app/models/Producto';
import { TipoProductoI } from 'src/app/models/TipoProducto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  public tipoproducto: TipoProductoI[] = [];
  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    marca: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stockMin: ['', [Validators.required]],
    cantidad: ['', [Validators.required]],
    TipoProductoId: ['', [Validators.required]],

  });
  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.mostrarTipoProducto();
  }

  mostrarTipoProducto() {
    this.productoService.getAllTipoProducto()
      .subscribe({
        next: (data) => {
          this.tipoproducto = data.tipoproducto
          console.log(this.tipoproducto)
        }
      })
  }



  onSubmit(): void {
    const formValue: ProductoI = this.form.value;
    console.log(formValue);
    this.productoService.createProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/productos');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/productos');
  }

  get nombre() { return this.form.get('nombre'); }
  get marca() { return this.form.get('marca'); }
  get precio() { return this.form.get('precio'); }
  get stockMin() { return this.form.get('stockMin'); }
  get cantidad() { return this.form.get('cantidad'); }
  get TipoProductoId() { return this.form.get('TipoProductoId'); }
}
