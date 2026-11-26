import { Component, signal } from '@angular/core';
import { Interpolacion } from './interpolacion/interpolacion';
import { PropertyBinding } from './property-binding/property-binding';
import { Perfil } from './perfil/perfil';
@Component({
  selector: 'app-root',
  imports: [Interpolacion, PropertyBinding, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
