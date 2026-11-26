import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
  ejemploNumerico = signal(0);
}
