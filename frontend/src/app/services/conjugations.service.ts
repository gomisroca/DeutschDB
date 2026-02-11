import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { VerbConjugation, Verb } from 'types';

@Injectable({
  providedIn: 'root',
})
export class ConjugationsService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.API_URL}/conjugations`;

  getById(id: string): Observable<VerbConjugation> {
    return this.http.get<VerbConjugation>(`${this.baseUrl}/${id}`);
  }

  getAll(params?: {
    skip?: number;
    take?: number;
    cursor?: string;
  }): Observable<VerbConjugation[]> {
    return this.http.get<VerbConjugation[]>(this.baseUrl, { params });
  }

  create(
    data: Omit<VerbConjugation, 'id'> & { verbName: string },
  ): Observable<VerbConjugation> {
    return this.http.post<VerbConjugation>(this.baseUrl, data);
  }

  update(
    id: string,
    data: Partial<Omit<VerbConjugation, 'id'>>,
  ): Observable<VerbConjugation> {
    return this.http.patch<VerbConjugation>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
