import { Component, signal } from '@angular/core';
import { Saludo } from './saludo/saludo';

@Component({
  selector: 'app-root',
  imports: [Saludo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('componentes');
}
