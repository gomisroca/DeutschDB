import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { Word } from 'types';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private http = inject(HttpClient);

  get(): Observable<Word[]> {
    return this.http.get<Word[]>(environment.API_URL + '/words');
  }

  constructor() {}
}
