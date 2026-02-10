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
  private baseUrl = `${environment.API_URL}/grammar`;

  getById(id: string): Observable<GrammarTopic> {
    return this.http.get<GrammarTopic>(`${this.baseUrl}/${id}`);
  }

  getAll(params?: {
    level?: string;
    skip?: number;
    take?: number;
    cursor?: string;
  }): Observable<GrammarTopic[]> {
    return this.http.get<GrammarTopic[]>(this.baseUrl, { params });
  }

  create(data: Omit<GrammarTopic, 'id'>): Observable<GrammarTopic> {
    return this.http.post<GrammarTopic>(this.baseUrl, data);
  }

  update(
    id: string,
    data: Partial<Omit<GrammarTopic, 'id'>>,
  ): Observable<GrammarTopic> {
    return this.http.patch<GrammarTopic>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
