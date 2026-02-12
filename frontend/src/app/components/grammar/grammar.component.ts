import { Component, inject } from '@angular/core';
import { GrammarService } from '@services/grammar.service';
import { GrammarTopic } from 'types';
import { LinkComponent } from '@components/ui/link/link.component';
import { GrammarCardComponent } from './card/card.component';
import { CursorPaginator } from '@app/utils/pagination/cursor-pagination.util';

@Component({
  selector: 'grammar',
  standalone: true,
  imports: [GrammarCardComponent, LinkComponent],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {
  private grammarService = inject(GrammarService);

  paginator = new CursorPaginator<GrammarTopic>((params) =>
    this.grammarService.getPaginated(params),
  );

  ngOnInit() {
    this.paginator.load();
  }
}
