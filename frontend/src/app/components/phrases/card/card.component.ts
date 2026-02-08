import { Component, Input } from '@angular/core';
// Components
import { LinkComponent } from '@components/ui/link/link.component';
import { ButtonComponent } from '@components/ui/button/button.component';
// Services
import { PhrasesService } from '@services/phrases.service';
import { NavigationService } from '@services/navigation.service';
// Types
import { Phrase } from 'types';
import { CardComponent } from '@app/components/ui/card/card.component';

@Component({
  selector: 'phrases-card',
  imports: [LinkComponent, ButtonComponent, CardComponent],
  templateUrl: './card.component.html',
})
export class PhrasesCardComponent {
  @Input({ required: true }) phrase!: Phrase;

  constructor(
    private phrasesService: PhrasesService,
    private navigationService: NavigationService,
  ) {}

  confirmDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${this.phrase?.original}"?`,
    );

    if (confirmed && this.phrase) {
      this.phrasesService.delete(this.phrase.id).subscribe({
        next: () => {
          this.navigationService.reloadCurrentRoute();
        },
        error: (err: unknown) => {
          console.error('Failed to delete phrase:', err);
          alert('Failed to delete the phrase. Please try again.');
        },
      });
    }
  }
}
