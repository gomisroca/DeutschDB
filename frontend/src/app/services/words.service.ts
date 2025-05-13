import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private http = inject(HttpClient);

  get(): Observable<Word[]> {
    return this.http.get<Word[]>('http://localhost:3000/words');
  }

  constructor() {}
}
