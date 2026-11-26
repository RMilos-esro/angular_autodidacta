import { Component, inject } from '@angular/core';
import { TarjetaProducto } from '../tarjeta-producto/tarjeta-producto';
import { Carrito } from '../carrito';

@Component({
  selector: 'app-pagina-inicio',
  imports: [TarjetaProducto],
  templateUrl: './pagina-inicio.html',
  styleUrl: './pagina-inicio.css',
})
export class PaginaInicio {
  // Público (no 'private') porque el template necesita leer
  // carrito.items() y carrito.total() directamente.
  carrito = inject(Carrito);

  recibirMensaje($event: string) {
    const [nombre, precio] = $event.split('|');
    this.carrito.agregar(nombre, precio);
  }

  eliminarProducto(producto: string[]) {
    this.carrito.eliminar(producto);
  }
}
