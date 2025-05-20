import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from '@app/services/words.service';
import { Word } from 'types';

@Component({
  selector: 'words-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
})
export class WordsUpdateComponent {
  form: Word & { examplesInput: string } = {
    id: '',
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

  constructor(
    private wordsService: WordsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.form.id = id;

    this.wordsService.getUnique(id).subscribe((word) => {
      this.form = {
        ...word,
        examplesInput: word.examples.join(','),
      };
    });
  }

  onSubmit(): void {
    this.form.examples = this.form.examplesInput
      .split(',')
      .map((example) => example.trim())
      .filter((example) => example.length > 0);

    this.wordsService
      .update({
        id: this.form.id,
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
        console.log('Updated word:', word);
      });
  }
}
