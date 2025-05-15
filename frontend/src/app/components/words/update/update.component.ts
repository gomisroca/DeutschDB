import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '@app/services/words.service';

@Component({
  selector: 'words-update',
  imports: [FormsModule],
  templateUrl: './update.component.html',
})
export class WordsUpdateComponent {
  constructor(
    private wordsService: WordsService,
    private route: ActivatedRoute
  ) {}

  word = '';
  type = '';
  gender = '';
  plural = '';
  level = '';
  definition = '';
  examples = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.wordsService
        .getUnique(id)
        .subscribe(
          (word) => (
            (this.word = word.word),
            (this.type = word.type),
            (this.gender = word.gender),
            (this.plural = word.plural),
            (this.level = word.level),
            (this.definition = word.definition),
            (this.examples = word.examples?.join('/') ?? '')
          )
        );
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.wordsService
      .update({
        id: id as string,
        word: this.word,
        type: this.type,
        gender: this.gender,
        plural: this.plural,
        level: this.level,
        definition: this.definition,
        examples: this.examples.split('/'),
      })
      .subscribe((word) => {
        console.log('Updated word:', word);
      });
  }
}
