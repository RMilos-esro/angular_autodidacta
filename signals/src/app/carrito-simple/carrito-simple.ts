import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-carrito-simple',
  imports: [],
  templateUrl: './carrito-simple.html',
  styleUrl: './carrito-simple.css',
})
export class CarritoSimple {
  precio = signal(100);
  cantidad = signal(2);
  total = computed(() => this.precio() * this.cantidad()); // Valor que cambia automaticamente en base a los valores de precio y cantidad

  agregarCantidad() {
    this.cantidad.update((value) => value + 1);
  }

  quitarCantidad() {
    if (this.cantidad() > 0) {
      this.cantidad.update((value) => value - 1);
    }
  }
}
