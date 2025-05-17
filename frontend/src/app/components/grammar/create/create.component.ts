import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GrammarService } from '@app/services/grammar.service';
import { GrammarTopic } from 'types';

@Component({
  selector: 'grammar-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
})
export class GrammarCreateComponent {
  form: Omit<GrammarTopic, 'id'> & { examplesInput: string } = {
    title: '',
    body: '',
    level: '',
    examplesInput: '',
    examples: [],
  };

  private grammarService = inject(GrammarService);

  onSubmit() {
    this.form.examples = this.form.examplesInput
      .split(',')
      .map((example) => example.trim())
      .filter((example) => example.length > 0);

    this.grammarService
      .create({
        title: this.form.title,
        body: this.form.body,
        level: this.form.level,
        examples: this.form.examples,
      })
      .subscribe((topic) => {
        console.log('Created topic:', topic);
      });
  }
}
