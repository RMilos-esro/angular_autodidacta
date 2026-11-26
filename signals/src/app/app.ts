import { Component, signal, computed } from '@angular/core';
import { CarritoSimple } from './carrito-simple/carrito-simple';
@Component({
  selector: 'app-root',
  imports: [CarritoSimple],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('signals');
  contador = signal(0);

  precio = signal(100);
  cantidad = signal(2);
  total = computed(() => this.precio() * this.cantidad()); // Valor que cambia automaticamente en base a los valores de precio y cantidad
}
