import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-ejemplo',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-ejemplo.html',
  styleUrl: './formulario-ejemplo.css',
})
export class FormularioEjemplo {
  formulario = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
  });

  enviar() {
    console.log(this.formulario.value);
  }
}
