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
  form: {
    id: string;
    word: string;
    type: string;
    gender: string;
    plural: string;
    level: string;
    definition: string;
    examples?: string;
  } = {
    id: '',
    word: '',
    type: '',
    gender: '',
    plural: '',
    level: '',
    definition: '',
    examples: '',
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
        examples: word.examples.join(',') ?? '',
      };
    });
  }

  onSubmit(): void {
    this.wordsService
      .update({
        ...this.form,
        examples: this.form.examples?.split(',') ?? [],
      })
      .subscribe((word) => {
        console.log('Updated word:', word);
      });
  }
}
