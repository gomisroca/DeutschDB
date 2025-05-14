import { Component, Input } from '@angular/core';
import { Word } from 'types';

@Component({
  selector: 'words-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class WordsCardComponent {
  @Input() word: Word | undefined;
}
