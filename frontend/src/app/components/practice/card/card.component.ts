import { Component, Input, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '@app/components/ui/button/button.component';
import { VerbsConjugationComponent } from '@app/components/verbs/conjugation/conjugation.component';
// Types
import { PracticeItem } from 'types';
import { CardComponent } from '@app/components/ui/card/card.component';

@Component({
  selector: 'practice-card',
  imports: [ButtonComponent, VerbsConjugationComponent, CardComponent],
  templateUrl: './card.component.html',
})
export class PracticeCardComponent {
  @Input({ required: true }) practice!: PracticeItem;
  showOrHide: boolean = false;
  original: boolean = true;
  lang: string[] = ['DE', 'EN'];

  showAnswer() {
    this.showOrHide = !this.showOrHide;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['practice']) this.showOrHide = false;
    if (['phrase', 'word'].includes(changes['practice'].currentValue.type)) {
      this.original =
        this.lang[Math.floor(Math.random() * this.lang.length)] === 'DE';
    }
  }
}
