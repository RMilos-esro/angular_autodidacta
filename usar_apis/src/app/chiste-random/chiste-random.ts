import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

@Component({
  selector: 'app-chiste-random',
  imports: [],
  templateUrl: './chiste-random.html',
  styleUrl: './chiste-random.css',
})
export class ChisteRandom {
      datos = httpResource<any>(() => 'https://v2.jokeapi.dev/joke/Programming?lang=es');

      pedirChiste(){
        this.datos.reload()
      }
}
