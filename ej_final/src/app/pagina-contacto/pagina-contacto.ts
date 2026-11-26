import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './pagina-contacto.html',
  styleUrl: './pagina-contacto.css',
})
export class PaginaContacto {
  registro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  enviar() {
    console.log(this.registro.value);
  }
}
