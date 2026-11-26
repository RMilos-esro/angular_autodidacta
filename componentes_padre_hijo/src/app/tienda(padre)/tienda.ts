import { Component, signal } from '@angular/core';
import { TarjetaProducto } from '../tarjeta-producto(hijo)/tarjeta-producto';

@Component({
  selector: 'app-tienda',
  imports: [TarjetaProducto],
  templateUrl: './tienda.html',
  styleUrl: './tienda.css',
})
export class Tienda {
  listaCarrito = signal<string[]>([]);

  recibirMensaje($event: string) {
    this.listaCarrito.update((values) => {
      return [...values, $event];
    });
  }
}
