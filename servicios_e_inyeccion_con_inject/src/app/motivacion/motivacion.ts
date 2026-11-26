import { Component, inject, signal } from '@angular/core';
import { Frases } from '../frases';
@Component({
  selector: 'app-motivacion',
  imports: [],
  templateUrl: './motivacion.html',
  styleUrl: './motivacion.css',
})
export class Motivacion {
  private frases = inject(Frases);

  stringFrase = signal('');

  obtenerNuevaFrase() {
    this.stringFrase.set(this.frases.devolverFrase());
  }
}
