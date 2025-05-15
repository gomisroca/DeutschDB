import { Component, Input } from '@angular/core';

@Component({
  selector: 'stylized-button',
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() onClick: () => void = () => {};
}
