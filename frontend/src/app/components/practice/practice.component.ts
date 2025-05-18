import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PracticeItem } from 'types';
import { ButtonComponent } from '@components/ui/button/button.component';
import { PracticeService } from '@services/practice.service';
import { PracticeCardComponent } from './card/card.component';

@Component({
  selector: 'practice',
  standalone: true,
  imports: [ButtonComponent, PracticeCardComponent],
  templateUrl: './practice.component.html',
})
export class PracticeComponent {
  practice: PracticeItem | undefined;
  private practiceService = inject(PracticeService);

  constructor() {}

  getAny() {
    this.practiceService
      .get()
      .subscribe((practice) => (this.practice = practice));
  }
  getWord() {
    this.practiceService
      .get('word')
      .subscribe((practice) => (this.practice = practice));
  }
  getVerb() {
    this.practiceService
      .get('verb')
      .subscribe((practice) => (this.practice = practice));
  }
  getGrammar() {
    this.practiceService
      .get('grammar')
      .subscribe((practice) => (this.practice = practice));
  }
  getPhrase() {
    this.practiceService
      .get('phrase')
      .subscribe((practice) => (this.practice = practice));
  }
}
