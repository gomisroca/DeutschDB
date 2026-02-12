import { Injectable } from '@angular/core';
import { GrammarTopic } from 'types';
import { ApiService } from './api.service';

interface GrammarQuery {
  level?: string;
}

@Injectable({ providedIn: 'root' })
export class GrammarService extends ApiService<GrammarTopic, GrammarQuery> {
  protected endpoint = 'words';
}
