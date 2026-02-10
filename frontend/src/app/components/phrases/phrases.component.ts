import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PhrasesService } from '@services/phrases.service';
import { Observable } from 'rxjs';
import { Phrase } from 'types';
import { LinkComponent } from '@components/ui/link/link.component';
import { PhrasesCardComponent } from './card/card.component';

@Component({
  selector: 'phrases',
  standalone: true,
  imports: [AsyncPipe, PhrasesCardComponent, LinkComponent],
  templateUrl: './phrases.component.html',
})
export class PhrasesComponent {
  phrases: Observable<Phrase[]>;
  private phrasesService = inject(PhrasesService);

  constructor() {
    this.phrases = this.phrasesService.getAll();
  }
}
