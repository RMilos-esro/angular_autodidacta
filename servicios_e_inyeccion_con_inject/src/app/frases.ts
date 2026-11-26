import { Service } from '@angular/core';
@Service()
export class Frases {
  private frases = ['Me he meado', 'Comí demasiado', 'Anochechió de golpe por culpa del eclipse'];
  devolverFrase(): string {
    return this.frases[Math.floor(Math.random() * this.frases.length)]; // de 0 a la longitud del array
  }
}
