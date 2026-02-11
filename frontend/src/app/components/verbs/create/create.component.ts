import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConjugationsService } from '@app/services/conjugations.service';
import { VerbsService } from '@app/services/verbs.service';
import { VerbConjugation } from 'types';

@Component({
  selector: 'verbs-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class VerbsCreateComponent {
  form: Omit<VerbConjugation, 'id'> & { verbName: string; formsInput: string } =
    {
      verbName: '',
      tense: '',
      mood: '',
      formsInput: '',
      forms: [],
    };

  private verbsService = inject(VerbsService);
  private conjugationsService = inject(ConjugationsService);

  onSubmit() {
    this.form.forms = this.form.formsInput
      .split(',')
      .map((form) => form.trim())
      .filter((form) => form.length > 0);

    this.verbsService
      .create({
        verb: this.form.verbName,
      })
      .subscribe((verb) => {
        console.log('Created verb:', verb);
      });

    this.conjugationsService.create({
      verbName: this.form.verbName,
      tense: this.form.tense,
      mood: this.form.mood,
      forms: this.form.forms,
    });
  }
}
