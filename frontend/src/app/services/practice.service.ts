import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { PracticeItem } from 'types';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {
  private http = inject(HttpClient);

  get(type?: 'word' | 'verb' | 'grammar' | 'phrase'): Observable<PracticeItem> {
    const url = type
      ? `${environment.API_URL}/practice/${type}`
      : `${environment.API_URL}/practice`;
    return this.http.get<PracticeItem>(url);
  }

  constructor() {}
}
