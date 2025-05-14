import { Routes } from '@angular/router';
import { WordsComponent } from '@components/words/words.component';
import { GrammarComponent } from '@components/grammar/grammar.component';
import { VerbsComponent } from '@components/verbs/verbs.component';

export const routes: Routes = [
  { path: 'words', component: WordsComponent, title: 'DeutschDB - Words' },
  {
    path: 'grammar',
    component: GrammarComponent,
    title: 'DeutschDB - Grammar',
  },
  { path: 'verbs', component: VerbsComponent, title: 'DeutschDB - Verbs' },
];
