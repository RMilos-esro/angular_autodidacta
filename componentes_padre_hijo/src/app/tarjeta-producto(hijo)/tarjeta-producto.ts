import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [],
  templateUrl: './tarjeta-producto.html',
  styleUrl: './tarjeta-producto.css',
})
export class TarjetaProducto {
  nombreProducto = input(''); //input.required para que sea obligatorio
  precioProducto = input(0.0);

  botonClickado = output<string>();

  avisar() {
    this.botonClickado.emit(this.nombreProducto());
  }
}
