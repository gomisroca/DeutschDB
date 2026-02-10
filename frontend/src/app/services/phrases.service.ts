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
  private baseUrl = `${environment.API_URL}/phrases`;

  getById(id: string): Observable<Phrase> {
    return this.http.get<Phrase>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<Phrase[]> {
    return this.http.get<Phrase[]>(this.baseUrl);
  }

  create(data: Omit<Phrase, 'id'>): Observable<Phrase> {
    return this.http.post<Phrase>(this.baseUrl, data);
  }

  update(id: string, data: Partial<Omit<Phrase, 'id'>>): Observable<Phrase> {
    return this.http.patch<Phrase>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
