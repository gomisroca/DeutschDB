import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesUpdateComponent } from './update.component';

describe('PhrasesUpdateComponent', () => {
  let component: PhrasesUpdateComponent;
  let fixture: ComponentFixture<PhrasesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhrasesUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhrasesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
