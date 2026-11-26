import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  contador = signal(0);

  aumentarContador() {
    this.contador.update((value) => value + 1);
  }
  reducirContador() {
    this.contador.update((value) => value - 1);
  }
  reiniciarContador() {
    this.contador.set(0);
  }
}
