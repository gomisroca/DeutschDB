import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Phrase } from 'types';

@Injectable({
  providedIn: 'root',
})
export class PhrasesService {
  private http = inject(HttpClient);

  getUnique(id: string): Observable<Phrase> {
    return this.http.get<Phrase>(environment.API_URL + '/phrases/' + id);
  }

  get(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(environment.API_URL + '/phrases');
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.API_URL + '/phrases/' + id);
  }

  create(data: Omit<Phrase, 'id'>): Observable<Phrase> {
    return this.http.post<Phrase>(environment.API_URL + '/phrases', data);
  }

  update(data: Phrase): Observable<Phrase> {
    return this.http.patch<Phrase>(
      environment.API_URL + '/phrases/' + data.id,
      data
    );
  }

  constructor() {}
}
