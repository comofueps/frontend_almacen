import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteI } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    password: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    estado: ['', [Validators.required]],

  });
  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,


    private router: Router,
  ) { }

  ngOnInit(): void {

  }



  onSubmit(): void {
    const formValue: ClienteI = this.form.value;
    console.log(formValue);
    this.clienteService.createCliente(formValue).subscribe(
      () => {
        // console.log('Se ha creado correctamente');


        this.router.navigateByUrl('/clientes');

      },
      err => {

        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/clientes');
  }

  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get correo() { return this.form.get('correo'); }
  get password() { return this.form.get('password'); }
  get telefono() { return this.form.get('telefono'); }
  get estado() { return this.form.get('estado'); }
  
}
