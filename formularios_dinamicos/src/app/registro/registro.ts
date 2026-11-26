import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  registro = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(4)]),
    edad: new FormControl(0, [Validators.required, Validators.min(18)]),
  });

  enviar() {
    console.log(this.registro.value);
  }
}
