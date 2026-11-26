import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  nombre = signal('Raul');
  edad = signal(26);
  avatarUrl = signal('https://placekitten.com/100/100');
  esMayorDeEdad = signal(true);
}
