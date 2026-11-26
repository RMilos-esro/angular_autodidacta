import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-semaforo',
  imports: [NgClass, NgStyle],
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css',
})
export class Semaforo {
  colorSemaforo = signal('red');

  cambiarRojo() {
    this.colorSemaforo.set('red');
  }
  cambiarAmbar() {
    this.colorSemaforo.set('yellow');
  }
  cambiarVerde() {
    this.colorSemaforo.set('green');
  }
}
