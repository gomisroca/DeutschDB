import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VerbsService } from '@app/services/verbs.service';
import { Verb } from 'types';

@Component({
  selector: 'verbs-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class VerbsCreateComponent {
  form: Omit<Verb, 'id'> & { formsInput: string } = {
    verb: '',
    tense: '',
    mood: '',
    formsInput: '',
    forms: [],
  };

  private verbsService = inject(VerbsService);

  onSubmit() {
    this.form.forms = this.form.formsInput
      .split(',')
      .map((form) => form.trim())
      .filter((form) => form.length > 0);

    this.verbsService
      .create({
        verb: this.form.verb,
        tense: this.form.tense,
        mood: this.form.mood,
        forms: this.form.forms,
      })
      .subscribe((word) => {
        console.log('Created word:', word);
      });
  }
}
