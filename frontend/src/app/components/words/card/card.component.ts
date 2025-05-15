import { Component, Input } from '@angular/core';
// Components
import { LinkComponent } from '@components/ui/link/link.component';
import { ButtonComponent } from '@components/ui/button/button.component';
// Services
import { WordsService } from '@services/words.service';
import { NavigationService } from '@services/navigation.service';
// Types
import { Word } from 'types';

@Component({
  selector: 'words-card',
  imports: [LinkComponent, ButtonComponent],
  templateUrl: './card.component.html',
})
export class WordsCardComponent {
  @Input() word: Word | undefined;

  constructor(
    private wordService: WordsService,
    private navigationService: NavigationService
  ) {}

  confirmDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${this.word?.word}"?`
    );

    if (confirmed && this.word) {
      this.wordService.delete(this.word.id).subscribe({
        next: () => {
          this.navigationService.reloadCurrentRoute();
        },
        error: (err: unknown) => {
          console.error('Failed to delete word:', err);
          alert('Failed to delete the word. Please try again.');
        },
      });
    }
  }
}
