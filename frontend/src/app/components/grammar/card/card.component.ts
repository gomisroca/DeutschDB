import { Component, Input } from '@angular/core';
// Components
import { LinkComponent } from '@components/ui/link/link.component';
import { ButtonComponent } from '@components/ui/button/button.component';
// Services
import { GrammarService } from '@services/grammar.service';
import { NavigationService } from '@services/navigation.service';
// Types
import { GrammarTopic } from 'types';

@Component({
  selector: 'grammar-card',
  imports: [LinkComponent, ButtonComponent],
  templateUrl: './card.component.html',
})
export class GrammarCardComponent {
  @Input({ required: true }) topic!: GrammarTopic;

  constructor(
    private grammarService: GrammarService,
    private navigationService: NavigationService
  ) {}

  confirmDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${this.topic?.title}"?`
    );

    if (confirmed && this.topic) {
      this.grammarService.delete(this.topic.id).subscribe({
        next: () => {
          this.navigationService.reloadCurrentRoute();
        },
        error: (err: unknown) => {
          console.error('Failed to delete grammar topic:', err);
          alert('Failed to delete the grammar topic. Please try again.');
        },
      });
    }
  }
}
