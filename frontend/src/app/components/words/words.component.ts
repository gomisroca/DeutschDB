import { Component, inject } from '@angular/core';
import { WordsService } from '@services/words.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Word } from 'types';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WordsCardComponent } from './card/card.component';

@Component({
  selector: 'words',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, WordsCardComponent],
  templateUrl: './words.component.html',
})
export class WordsComponent {
  words: Observable<Word[]>;
  private wordsService = inject(WordsService);

  constructor() {
    this.words = this.wordsService.get();
  }
}
