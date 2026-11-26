import { Service } from '@angular/core';

@Service()
export class Ejemplo {
  sumar(a: number, b: number): number {
    return a + b;
  }
}
