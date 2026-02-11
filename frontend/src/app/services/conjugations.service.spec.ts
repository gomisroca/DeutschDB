import { TestBed } from '@angular/core/testing';

import { ConjugationsService } from './conjugations.service';

describe('ConjugationsService', () => {
  let service: ConjugationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjugationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
