import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LinkComponent } from '../ui/link/link.component';
import { Observable } from 'rxjs';
import { Verb } from 'types';
import { VerbsService } from '@app/services/verbs.service';
import { VerbsCardComponent } from './card/card.component';

@Component({
  selector: 'verbs',
  standalone: true,
  imports: [AsyncPipe, VerbsCardComponent, LinkComponent],
  templateUrl: './verbs.component.html',
})
export class VerbsComponent {
  verbs: Observable<Verb[]>;
  private verbsService = inject(VerbsService);

  constructor() {
    this.verbs = this.verbsService.get();
  }
}
