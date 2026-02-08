import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @ContentChild('[card-header]') header!: ElementRef;
  @ContentChild('[card-actions]') actions!: ElementRef;

  get hasHeader() {
    return !!this.header;
  }

  get hasActions() {
    return !!this.actions;
  }
}
