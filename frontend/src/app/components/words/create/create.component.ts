import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordsService } from '@app/services/words.service';

@Component({
  selector: 'words-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class WordsCreateComponent {
  form: {
    word: string;
    type: string;
    gender?: string;
    plural?: string;
    level: string;
    definition: string;
    examples?: string;
  } = {
    word: '',
    type: '',
    gender: '',
    plural: '',
    level: '',
    definition: '',
    examples: '',
  };

  private wordsService = inject(WordsService);

  onSubmit() {
    this.wordsService
      .create({
        ...this.form,
        examples: this.form.examples?.split(','),
      })
      .subscribe((word) => {
        console.log('Created word:', word);
      });
  }
}
