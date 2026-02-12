import { Component, inject } from '@angular/core';
import { LinkComponent } from '../ui/link/link.component';
import { Verb } from 'types';
import { VerbsService } from '@app/services/verbs.service';
import { VerbsCardComponent } from './card/card.component';
import { CursorPaginator } from '@app/utils/pagination/cursor-pagination.util';

@Component({
  selector: 'verbs',
  standalone: true,
  imports: [VerbsCardComponent, LinkComponent],
  templateUrl: './verbs.component.html',
})
export class VerbsComponent {
  private verbsService = inject(VerbsService);

  paginator = new CursorPaginator<Verb>((params) =>
    this.verbsService.getPaginated(params),
  );

  ngOnInit() {
    this.paginator.load();
  }
}
