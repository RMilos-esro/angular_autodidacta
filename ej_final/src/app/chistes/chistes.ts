import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-chistes',
  imports: [],
  templateUrl: './chistes.html',
  styleUrl: './chistes.css',
})
export class Chistes {
  datos = httpResource<any>(() => 'https://v2.jokeapi.dev/joke/Programming?lang=es');

  pedirChiste() {
    this.datos.reload();
  }
}
