import { Component, signal } from '@angular/core';
import { ChisteRandom } from './chiste-random/chiste-random';
@Component({
  selector: 'app-root',
  imports: [ChisteRandom],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('usar_apis');
}
