import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesCardComponent } from './card.component';

describe('PhrasesCardComponent', () => {
  let component: PhrasesCardComponent;
  let fixture: ComponentFixture<PhrasesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhrasesCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhrasesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
