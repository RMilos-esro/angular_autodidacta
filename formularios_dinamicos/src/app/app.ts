import { Component, signal } from '@angular/core';
import { FormularioEjemplo } from './formulario-ejemplo/formulario-ejemplo';
import { Registro } from './registro/registro';
@Component({
  selector: 'app-root',
  imports: [FormularioEjemplo, Registro],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('formularios_dinamicos');
}
