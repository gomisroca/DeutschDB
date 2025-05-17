import { Routes } from '@angular/router';
// Words
import { WordsComponent } from '@components/words/words.component';
import { WordsCreateComponent } from '@components/words/create/create.component';
import { WordsUpdateComponent } from '@components/words/update/update.component';
// Grammar
import { GrammarComponent } from '@components/grammar/grammar.component';
import { GrammarCreateComponent } from '@components/grammar/create/create.component';
import { GrammarUpdateComponent } from '@components/grammar/update/update.component';
// Verbs
import { VerbsComponent } from '@components/verbs/verbs.component';
import { VerbsCreateComponent } from '@components/verbs/create/create.component';
import { VerbsUpdateComponent } from '@components/verbs/update/update.component';
// Phrases
import { PhrasesComponent } from '@components/phrases/phrases.component';
import { PhrasesCreateComponent } from '@components/phrases/create/create.component';
import { PhrasesUpdateComponent } from '@components/phrases/update/update.component';
// Practice
import { PracticeComponent } from '@components/practice/practice.component';
import { PracticeCreateComponent } from '@components/practice/create/create.component';

export const routes: Routes = [
  {
    path: 'words',
    component: WordsComponent,
    title: 'DeutschDB - Words',
  },
  {
    path: 'words/create',
    component: WordsCreateComponent,
    title: 'DeutschDB - Words - Create',
  },
  {
    path: 'words/update/:id',
    component: WordsUpdateComponent,
    title: 'DeutschDB - Words - Update',
  },
  {
    path: 'grammar',
    component: GrammarComponent,
    title: 'DeutschDB - Grammar',
  },
  {
    path: 'grammar/create',
    component: GrammarCreateComponent,
    title: 'DeutschDB - Grammar - Create',
  },
  {
    path: 'grammar/update/:id',
    component: GrammarUpdateComponent,
    title: 'DeutschDB - Grammar - Update',
  },
  { path: 'verbs', component: VerbsComponent, title: 'DeutschDB - Verbs' },
  {
    path: 'verbs/create',
    component: VerbsCreateComponent,
    title: 'DeutschDB - Verbs - Create',
  },
  {
    path: 'verbs/update/:id',
    component: VerbsUpdateComponent,
    title: 'DeutschDB - Verbs - Update',
  },
  {
    path: 'phrases',
    component: PhrasesComponent,
    title: 'DeutschDB - Phrases',
  },
  {
    path: 'phrases/create',
    component: PhrasesCreateComponent,
    title: 'DeutschDB - Phrases - Create',
  },
  {
    path: 'phrases/update/:id',
    component: PhrasesUpdateComponent,
    title: 'DeutschDB - Phrases - Update',
  },
  {
    path: 'practice',
    component: PracticeComponent,
    title: 'DeutschDB - Practice',
  },
  {
    path: 'practice/create',
    component: PracticeCreateComponent,
    title: 'DeutschDB - Practice - Create',
  },
];
