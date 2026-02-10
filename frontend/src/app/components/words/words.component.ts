import { Component, inject } from '@angular/core';
import { WordsService } from '@services/words.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Word } from 'types';
import { WordsCardComponent } from './card/card.component';
import { LinkComponent } from '../ui/link/link.component';

@Component({
  selector: 'words',
  standalone: true,
  imports: [AsyncPipe, WordsCardComponent, LinkComponent],
  templateUrl: './words.component.html',
})
export class WordsComponent {
  words: Observable<Word[]>;
  private wordsService = inject(WordsService);

  constructor() {
    this.words = this.wordsService.getAll();
  }
}
