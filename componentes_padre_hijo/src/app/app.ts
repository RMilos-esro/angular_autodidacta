import { Component, signal, input } from '@angular/core';
import { Tienda } from './tienda(padre)/tienda';
@Component({
  selector: 'app-root',
  imports: [Tienda],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('componentes_padre_hijo');
}
