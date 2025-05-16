import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsConjugationComponent } from './conjugation.component';

describe('VerbsConjugationComponent', () => {
  let component: VerbsConjugationComponent;
  let fixture: ComponentFixture<VerbsConjugationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbsConjugationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerbsConjugationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
