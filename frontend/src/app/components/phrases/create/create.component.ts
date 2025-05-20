import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PhrasesService } from '@app/services/phrases.service';
import { Phrase } from 'types';

@Component({
  selector: 'phrases-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class PhrasesCreateComponent {
  form: Omit<Phrase, 'id'> = {
    topic: '',
    level: '',
    original: '',
    translation: '',
  };

  private phrasesService = inject(PhrasesService);

  onSubmit(): void {
    this.phrasesService
      .create({
        topic: this.form.topic,
        level: this.form.level,
        original: this.form.original,
        translation: this.form.translation,
      })
      .subscribe((phrase) => {
        console.log('Created phrase:', phrase);
      });
  }
}
