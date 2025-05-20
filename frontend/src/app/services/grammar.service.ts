import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { GrammarTopic } from 'types';

@Injectable({
  providedIn: 'root',
})
export class GrammarService {
  private http = inject(HttpClient);

  getUnique(id: string): Observable<GrammarTopic> {
    return this.http.get<GrammarTopic>(environment.API_URL + '/grammar/' + id);
  }

  get(): Observable<GrammarTopic[]> {
    return this.http.get<GrammarTopic[]>(environment.API_URL + '/grammar');
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.API_URL + '/grammar/' + id);
  }

  create(data: Omit<GrammarTopic, 'id'>): Observable<GrammarTopic> {
    return this.http.post<GrammarTopic>(environment.API_URL + '/grammar', data);
  }

  update(data: GrammarTopic): Observable<GrammarTopic> {
    return this.http.patch<GrammarTopic>(
      environment.API_URL + '/grammar/' + data.id,
      data
    );
  }

  constructor() {}
}
