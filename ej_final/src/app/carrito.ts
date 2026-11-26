import { Service, signal, computed } from '@angular/core';

@Service()
export class Carrito {
  // El estado real es privado: solo el propio servicio puede modificarlo.
  private lista = signal<string[][]>([]);

  // Los componentes pueden LEER esto (carrito.items()), pero no
  // reemplazarlo directamente con .set()/.update() desde fuera del servicio.
  items = this.lista.asReadonly();

  // computed() se recalcula solo cada vez que 'lista' cambia.
  total = computed(() => {
    let suma = 0;
    for (const item of this.lista()) {
      suma += parseFloat(item[1]);
    }
    return suma;
  });

  agregar(nombreProducto: string, precioProducto: string) {
    this.lista.update((actuales) => [...actuales, [nombreProducto, precioProducto]]);
  }

  eliminar(producto: string[]) {
    this.lista.update((actuales) => actuales.filter((v) => v !== producto));
  }
}
