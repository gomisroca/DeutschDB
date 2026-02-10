import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GrammarService } from '@services/grammar.service';
import { Observable } from 'rxjs';
import { GrammarTopic } from 'types';
import { LinkComponent } from '@components/ui/link/link.component';
import { GrammarCardComponent } from './card/card.component';

@Component({
  selector: 'grammar',
  standalone: true,
  imports: [AsyncPipe, GrammarCardComponent, LinkComponent],
  templateUrl: './grammar.component.html',
})
export class GrammarComponent {
  topics: Observable<GrammarTopic[]>;
  private grammarService = inject(GrammarService);

  constructor() {
    this.topics = this.grammarService.getAll();
  }
}
