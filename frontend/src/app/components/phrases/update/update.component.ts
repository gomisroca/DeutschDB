import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhrasesService } from '@app/services/phrases.service';
import { Phrase } from 'types';

@Component({
  selector: 'phrases-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
})
export class PhrasesUpdateComponent {
  form: Phrase = {
    id: '',
    topic: '',
    level: '',
    original: '',
    translation: '',
  };

  constructor(
    private phrasesService: PhrasesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.form.id = id;

    this.phrasesService.getById(id).subscribe((phrase) => {
      this.form = phrase;
    });
  }

  onSubmit(): void {
    this.phrasesService
      .update(this.form.id, {
        topic: this.form.topic,
        level: this.form.level,
        original: this.form.original,
        translation: this.form.translation,
      })
      .subscribe((phrase) => {
        console.log('Updated phrase:', phrase);
      });
  }
}
