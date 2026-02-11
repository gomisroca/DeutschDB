import { Injectable } from '@angular/core';
import { Word } from 'types';
import { ApiService } from './api.service';

interface WordsQuery {
  type?: string;
  level?: string;
  skip?: number;
  take?: number;
  cursor?: string;
}

@Injectable({ providedIn: 'root' })
export class WordsService extends ApiService<Word, WordsQuery> {
  protected endpoint = 'words';
}
