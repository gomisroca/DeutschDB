import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WordsService } from '@app/services/words.service';

@Component({
  selector: 'words-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class WordsCreateComponent {
  word = '';
  type = '';
  gender = '';
  plural = '';
  level = '';
  definition = '';
  examples = '';

  private wordsService = inject(WordsService);

  onSubmit() {
    this.wordsService
      .create({
        word: this.word,
        type: this.type,
        gender: this.gender,
        plural: this.plural,
        level: this.level,
        definition: this.definition,
        examples: this.examples.split('/'),
      })
      .subscribe((word) => {
        console.log('Created word:', word);
      });
  }
}
