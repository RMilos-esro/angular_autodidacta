import { Component, inject, signal } from '@angular/core';
import { Ejemplo } from './ejemplo';
import { Motivacion } from './motivacion/motivacion';
@Component({
  selector: 'app-root',
  imports: [Motivacion],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('servicios_e_inyeccion_con_inject');

  private calculadora = inject(Ejemplo);
  resultado = 0;

  calcular() {
    this.resultado = this.calculadora.sumar(5, 2);
  }
}
