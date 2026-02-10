import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { VerbConjugation, Verb } from 'types';

@Injectable({
  providedIn: 'root',
})
export class VerbsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.API_URL}/verbs`;

  getById(id: string): Observable<VerbConjugation> {
    return this.http.get<VerbConjugation>(`${this.baseUrl}/${id}`);
  }

  getAll(params?: {
    skip?: number;
    take?: number;
    cursor?: string;
  }): Observable<Verb[]> {
    return this.http.get<Verb[]>(this.baseUrl, { params });
  }

  create(
    data: Omit<VerbConjugation, 'id'> & { verbName: string },
  ): Observable<Verb> {
    return this.http.post<Verb>(this.baseUrl, data);
  }

  update(
    id: string,
    data: Partial<Omit<VerbConjugation, 'id'>>,
  ): Observable<Verb> {
    return this.http.patch<Verb>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
