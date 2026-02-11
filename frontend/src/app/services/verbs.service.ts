import { Injectable } from '@angular/core';
import { Verb } from 'types';
import { ApiService } from './api.service';

interface VerbsQuery {
  skip?: number;
  take?: number;
  cursor?: string;
}

@Injectable({
  providedIn: 'root',
})
export class VerbsService extends ApiService<Verb, VerbsQuery> {
  protected endpoint = 'verbs';
}
