import { Injectable } from '@angular/core';
import { Verb } from 'types';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class VerbsService extends ApiService<Verb> {
  protected endpoint = 'verbs';
}
