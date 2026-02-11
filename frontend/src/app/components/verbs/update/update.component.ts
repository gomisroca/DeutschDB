import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConjugationsService } from '@app/services/conjugations.service';
import { VerbConjugation } from 'types';

@Component({
  selector: 'verbs-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
})
export class VerbsUpdateComponent {
  form: VerbConjugation & { formsInput: string } = {
    id: '',
    tense: '',
    mood: '',
    formsInput: '',
    forms: [],
  };

  constructor(
    private conjugationsService: ConjugationsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.form.id = id;

    this.conjugationsService.getById(id).subscribe((conjugation) => {
      this.form = {
        ...conjugation,
        formsInput: conjugation.forms.join(',') ?? '',
      };
    });
  }

  onSubmit(): void {
    this.form.forms = this.form.formsInput
      .split(',')
      .map((form) => form.trim())
      .filter((form) => form.length > 0);

    this.conjugationsService
      .update(this.form.id, {
        tense: this.form.tense,
        mood: this.form.mood,
        forms: this.form.forms,
      })
      .subscribe((conjugation) => {
        console.log('Updated verb conjugation:', conjugation);
      });
  }
}
