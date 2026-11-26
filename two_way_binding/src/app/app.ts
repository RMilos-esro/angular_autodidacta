import { Component, signal } from '@angular/core';
import { Conversor } from './conversor/conversor';
@Component({
  selector: 'app-root',
  imports: [Conversor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('two_way_binding');
}
