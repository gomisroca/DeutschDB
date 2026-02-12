import { Component, inject } from '@angular/core';
import { PhrasesService } from '@services/phrases.service';
import { Phrase } from 'types';
import { LinkComponent } from '@components/ui/link/link.component';
import { PhrasesCardComponent } from './card/card.component';
import { CursorPaginator } from '@app/utils/pagination/cursor-pagination.util';

@Component({
  selector: 'phrases',
  standalone: true,
  imports: [PhrasesCardComponent, LinkComponent],
  templateUrl: './phrases.component.html',
})
export class PhrasesComponent {
  private phrasesService = inject(PhrasesService);

  paginator = new CursorPaginator<Phrase>((params) =>
    this.phrasesService.getPaginated(params),
  );

  ngOnInit() {
    this.paginator.load();
  }
}
