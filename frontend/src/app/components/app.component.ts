import { Component, signal } from '@angular/core';
import { WordsComponent } from './words/words.component';

@Component({
  selector: 'root',
  imports: [WordsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DeutschDB';
}
