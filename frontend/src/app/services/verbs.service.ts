import { Injectable } from '@angular/core';
import { VerbConjugation, Verb } from 'types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class VerbsService extends ApiService<Verb, VerbConjugation> {
  protected endpoint = 'verbs';
}
