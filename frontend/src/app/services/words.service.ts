import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Word } from 'types';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  private http = inject(HttpClient);

  getUnique(id: string): Observable<Word> {
    return this.http.get<Word>(environment.API_URL + '/words/' + id);
  }

  get(): Observable<Word[]> {
    return this.http.get<Word[]>(environment.API_URL + '/words');
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.API_URL + '/words/' + id);
  }

  create(data: Omit<Word, 'id'>): Observable<Word> {
    return this.http.post<Word>(environment.API_URL + '/words', data);
  }

  update(data: Word): Observable<Word> {
    return this.http.patch<Word>(
      environment.API_URL + '/words/' + data.id,
      data
    );
  }

  constructor() {}
}
