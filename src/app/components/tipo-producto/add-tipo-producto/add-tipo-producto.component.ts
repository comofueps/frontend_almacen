import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoProductoI } from 'src/app/models/TipoProducto';
import { TipoProductoService } from 'src/app/services/tipo-producto.service';

@Component({
  selector: 'app-add-tipo-producto',
  templateUrl: './add-tipo-producto.component.html',
  styleUrls: ['./add-tipo-producto.component.css']
})
export class AddTipoProductoComponent implements OnInit{
  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],


  });
  constructor(
    private formBuilder: FormBuilder,
    private tipoProductoService: TipoProductoService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }



  onSubmit(): void {
    const formValue: TipoProductoI = this.form.value;
    const prueba:HTMLInputElement | null = document.getElementById('nombre') as HTMLInputElement;
    console.log(formValue);
    this.tipoProductoService.createTipoProducto(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');
        this.router.navigateByUrl('/tipo_producto');
      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/tipo_producto');
  }

  get nombre() { return this.form.get('nombre'); }
}
