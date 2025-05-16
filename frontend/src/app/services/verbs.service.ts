import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { Verb, Word } from 'types';

@Injectable({
  providedIn: 'root',
})
export class VerbsService {
  private http = inject(HttpClient);

  getUnique(id: string): Observable<Verb> {
    return this.http.get<Verb>(environment.API_URL + '/verbs/' + id);
  }

  get(): Observable<Verb[]> {
    return this.http.get<Verb[]>(environment.API_URL + '/verbs');
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.API_URL + '/verbs/' + id);
  }

  create(data: Omit<Verb, 'id'>): Observable<Verb> {
    return this.http.post<Verb>(environment.API_URL + '/verbs', data);
  }

  update(data: Verb): Observable<Verb> {
    return this.http.patch<Verb>(
      environment.API_URL + '/verbs/' + data.id,
      data
    );
  }

  constructor() {}
}
