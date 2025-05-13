import { Component, inject } from '@angular/core';
import { WordsService } from '@services/words.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Word } from 'types';

@Component({
  selector: 'words',
  imports: [AsyncPipe],
  templateUrl: './words.component.html',
})
export class WordsComponent {
  words: Observable<Word[]>;
  private wordsService = inject(WordsService);

  constructor() {
    this.words = this.wordsService.get();
  }
}
