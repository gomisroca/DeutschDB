import { Injectable } from '@angular/core';
import { Phrase } from 'types';
import { ApiService } from './api.service';

interface PhrasesQuery {
  level?: string;
  skip?: number;
  take?: number;
  cursor?: string;
}
@Injectable({ providedIn: 'root' })
export class PhrasesService extends ApiService<Phrase, PhrasesQuery> {
  protected endpoint = 'phrases';
}
