import { Injectable } from '@angular/core';
import { VerbConjugation } from 'types';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConjugationsService extends ApiService<VerbConjugation> {
  protected endpoint = 'conjugations';

  override create(
    data: Omit<VerbConjugation, 'id'> & { verbName: string },
  ): Observable<VerbConjugation> {
    return this.http.post<VerbConjugation>(this.baseUrl, data);
  }
}
