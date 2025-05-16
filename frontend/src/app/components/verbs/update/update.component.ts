import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VerbsService } from '@services/verbs.service';
import { Verb } from 'types';

@Component({
  selector: 'verbs-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
})
export class VerbsUpdateComponent {
  form: Verb & { formsInput: string } = {
    id: '',
    verb: '',
    tense: '',
    mood: '',
    formsInput: '',
    forms: [],
  };

  constructor(
    private verbsService: VerbsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.form.id = id;

    this.verbsService.getUnique(id).subscribe((verb) => {
      this.form = {
        ...verb,
        formsInput: verb.forms.join(',') ?? '',
      };
    });
  }

  onSubmit(): void {
    this.form.forms = this.form.formsInput
      .split(',')
      .map((form) => form.trim())
      .filter((form) => form.length > 0);

    this.verbsService
      .update({
        id: this.form.id,
        verb: this.form.verb,
        tense: this.form.tense,
        mood: this.form.mood,
        forms: this.form.forms,
      })
      .subscribe((verb) => {
        console.log('Updated verb:', verb);
      });
  }
}
