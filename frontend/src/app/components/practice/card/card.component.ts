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

  showAnswer() {
    this.showOrHide = !this.showOrHide;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['practice']) this.showOrHide = false;
  }
}
