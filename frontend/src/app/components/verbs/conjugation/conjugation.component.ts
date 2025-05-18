import { Component, Input } from '@angular/core';
// Components
import { LinkComponent } from '@components/ui/link/link.component';
import { ButtonComponent } from '@components/ui/button/button.component';
// Services
import { NavigationService } from '@services/navigation.service';
import { VerbsService } from '@services/verbs.service';
// Types
import { VerbConjugation } from 'types';

@Component({
  selector: 'verbs-conjugation',
  imports: [LinkComponent, ButtonComponent],
  templateUrl: './conjugation.component.html',
})
export class VerbsConjugationComponent {
  @Input({ required: true }) conjugation!: VerbConjugation;
  @Input() practice: boolean = false;

  tense: string = '';
  mood: string = '';

  ngOnInit(): void {
    this.tense = this.conjugation.tense
      ?.split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    this.mood = this.conjugation.mood
      ?.split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  constructor(
    private verbService: VerbsService,
    private navigationService: NavigationService
  ) {}

  confirmDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${this.conjugation?.tense} ${this.conjugation?.mood}"?`
    );

    if (confirmed && this.conjugation) {
      this.verbService.delete(this.conjugation.id).subscribe({
        next: () => {
          this.navigationService.reloadCurrentRoute();
        },
        error: (err: unknown) => {
          console.error('Failed to delete verb conjugation:', err);
          alert('Failed to delete the verb conjugation. Please try again.');
        },
      });
    }
  }
}
