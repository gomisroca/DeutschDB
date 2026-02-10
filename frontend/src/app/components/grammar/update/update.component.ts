import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GrammarService } from '@services/grammar.service';
import { GrammarTopic } from 'types';

@Component({
  selector: 'grammar-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
})
export class GrammarUpdateComponent {
  form: GrammarTopic & { examplesInput: string } = {
    id: '',
    title: '',
    body: '',
    level: '',
    examplesInput: '',
    examples: [],
  };

  constructor(
    private grammarService: GrammarService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.form.id = id;

    this.grammarService.getById(id).subscribe((topic) => {
      this.form = {
        ...topic,
        examplesInput: topic.examples.join(','),
      };
    });
  }

  onSubmit(): void {
    this.form.examples = this.form.examplesInput
      .split(',')
      .map((example) => example.trim())
      .filter((example) => example.length > 0);

    this.grammarService
      .update(this.form.id, {
        title: this.form.title,
        body: this.form.body,
        level: this.form.level,
        examples: this.form.examples,
      })
      .subscribe((topic) => {
        console.log('Updated topic:', topic);
      });
  }
}
