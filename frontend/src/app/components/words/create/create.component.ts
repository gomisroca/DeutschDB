import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordsService } from '@app/services/words.service';
import { Word } from 'types';

@Component({
  selector: 'words-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class WordsCreateComponent {
  form: Omit<Word, 'id'> & { examplesInput: string } = {
    word: '',
    type: '',
    gender: '',
    plural: '',
    level: '',
    definition: '',
    translation: '',
    examplesInput: '',
    examples: [],
  };

  private wordsService = inject(WordsService);

  onSubmit() {
    this.form.examples = this.form.examplesInput
      .split(',')
      .map((example) => example.trim())
      .filter((example) => example.length > 0);

    this.wordsService
      .create({
        word: this.form.word,
        type: this.form.type,
        gender: this.form.gender,
        plural: this.form.plural,
        level: this.form.level,
        definition: this.form.definition,
        translation: this.form.translation,
        examples: this.form.examples,
      })
      .subscribe((word) => {
        console.log('Created word:', word);
      });
  }
}
