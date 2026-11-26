import { Component, signal } from '@angular/core';
import { Contador } from './contador/contador';
@Component({
  selector: 'app-root',
  imports: [Contador],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('manejo_de_eventos');
  saludar() {
    console.log('SALUDO USANDO EVENTO');
  }

  mostrarTeclaPulsada(evento: KeyboardEvent) {
    console.log('Tecla pulsada ' + evento.key);
  }
}
