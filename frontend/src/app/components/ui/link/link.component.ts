import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'stylized-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() label: string = '';
  @Input() path: string = '';
}
