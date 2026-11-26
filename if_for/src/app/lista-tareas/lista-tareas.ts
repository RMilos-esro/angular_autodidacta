import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lista-tareas',
  imports: [],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareas {
  listaTareas = signal(['Comer', 'Ducharte', 'Preparar la cena']);

  vaciarLista() {
    this.listaTareas.set([]);
  }
}
