import { Component, signal } from '@angular/core';
import { ListaTareas } from './lista-tareas/lista-tareas';
@Component({
  selector: 'app-root',
  imports: [ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('if_for');

  edad = signal(0);
}
