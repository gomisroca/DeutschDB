import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  segment: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.segment = this.router.url.split('/')[1] || '';
    });
  }

  links = [
    { path: 'words', label: 'Words' },
    { path: 'grammar', label: 'Grammar' },
    { path: 'verbs', label: 'Verbs' },
    { path: 'phrases', label: 'Phrases' },
    { path: 'practice', label: 'Practice' },
  ];
}
