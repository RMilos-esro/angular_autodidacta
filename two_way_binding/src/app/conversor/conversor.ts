import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  imports: [FormsModule],
  templateUrl: './conversor.html',
  styleUrl: './conversor.css',
})
export class Conversor {
  celsius = 30;
  calcularFarenheit(grados: number): number {
    return grados * 1.8 + 32;
  }

  get fahrenheit(): number {
    return this.celsius * 1.8 + 32;
  }
}
