import { Component, Input, SimpleChanges } from '@angular/core';
import { ButtonComponent } from '@app/components/ui/button/button.component';
import { VerbsConjugationComponent } from '@app/components/verbs/conjugation/conjugation.component';
// Types
import { PracticeItem } from 'types';

@Component({
  selector: 'practice-card',
  imports: [ButtonComponent, VerbsConjugationComponent],
  templateUrl: './card.component.html',
})
export class PracticeCardComponent {
  @Input({ required: true }) practice!: PracticeItem;
  showOrHide: boolean = false;
  ENorDE: string = 'DE';
  lang: string[] = ['DE', 'EN'];

  showAnswer() {
    this.showOrHide = !this.showOrHide;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['practice']) this.showOrHide = false;
    if (changes['practice'].currentValue.type === 'phrase') {
      this.ENorDE = this.lang[Math.floor(Math.random() * this.lang.length)];
    }
  }
}
