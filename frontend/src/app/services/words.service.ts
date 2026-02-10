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
  private baseUrl = `${environment.API_URL}/words`;

  getById(id: string): Observable<Word> {
    return this.http.get<Word>(`${this.baseUrl}/${id}`);
  }

  getAll(params?: {
    type?: string;
    level?: string;
    skip?: number;
    take?: number;
    cursor?: string;
  }): Observable<Word[]> {
    return this.http.get<Word[]>(this.baseUrl, { params });
  }

  create(data: Omit<Word, 'id'>): Observable<Word> {
    return this.http.post<Word>(this.baseUrl, data);
  }

  update(id: string, data: Partial<Omit<Word, 'id'>>): Observable<Word> {
    return this.http.patch<Word>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
