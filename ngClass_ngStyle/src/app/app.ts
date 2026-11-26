import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { Semaforo } from './semaforo/semaforo';
@Component({
  selector: 'app-root',
  imports: [NgClass, NgStyle, Semaforo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ngClass_ngStyle');

  tieneError() {
    return false;
  }
}
