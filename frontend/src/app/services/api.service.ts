import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

interface PaginationParams {
  skip?: number;
  take?: number;
  cursor?: string;
}

interface PaginatedResponse<T> {
  data: T[];
  total?: number;
  nextCursor?: string;
}

export abstract class ApiService<
  T extends { id: string },
  TQuery extends Record<string, any> = {},
> {
  protected http = inject(HttpClient);
  protected abstract endpoint: string;

  protected get baseUrl(): string {
    return `${environment.API_URL}/${this.endpoint}`;
  }

  // ---------- CRUD ----------

  getById(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(data: Omit<T, 'id'>): Observable<T> {
    return this.http.post<T>(this.baseUrl, data);
  }

  update(id: string, data: Partial<Omit<T, 'id'>>): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // ---------- Unpaginated ----------

  getAll(params?: TQuery & PaginationParams): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl, { params });
  }

  // ---------- Paginated ----------

  getPaginated(
    params?: TQuery & PaginationParams,
  ): Observable<PaginatedResponse<T>> {
    return this.http.get<PaginatedResponse<T>>(this.baseUrl, { params });
  }
}
