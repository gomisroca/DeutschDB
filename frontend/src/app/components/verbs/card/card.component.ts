import { Component, Input } from '@angular/core';
// Components
import { ButtonComponent } from '@components/ui/button/button.component';
// Services
import { VerbsService } from '@services/verbs.service';
import { NavigationService } from '@services/navigation.service';
// Types
import { Verb } from 'types';
import { VerbsConjugationComponent } from '../conjugation/conjugation.component';

@Component({
  selector: 'verbs-card',
  imports: [ButtonComponent, VerbsConjugationComponent],
  templateUrl: './card.component.html',
})
export class VerbsCardComponent {
  @Input({ required: true }) verb!: Verb;

  constructor(
    private verbService: VerbsService,
    private navigationService: NavigationService
  ) {}

  confirmDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${this.verb?.verb}"?`
    );

    if (confirmed && this.verb) {
      this.verbService.delete(this.verb.id).subscribe({
        next: () => {
          this.navigationService.reloadCurrentRoute();
        },
        error: (err: unknown) => {
          console.error('Failed to delete verb:', err);
          alert('Failed to delete the verb. Please try again.');
        },
      });
    }
  }
}
