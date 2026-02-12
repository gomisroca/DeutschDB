import { Component, inject } from '@angular/core';
import { WordsService } from '@services/words.service';
import { Word } from 'types';
import { WordsCardComponent } from './card/card.component';
import { LinkComponent } from '../ui/link/link.component';
import { CursorPaginator } from '@app/utils/pagination/cursor-pagination.util';

@Component({
  selector: 'words',
  standalone: true,
  imports: [WordsCardComponent, LinkComponent],
  templateUrl: './words.component.html',
})
export class WordsComponent {
  private wordsService = inject(WordsService);

  paginator = new CursorPaginator<Word>((params) =>
    this.wordsService.getPaginated(params),
  );

  ngOnInit() {
    this.paginator.load();
  }
}
