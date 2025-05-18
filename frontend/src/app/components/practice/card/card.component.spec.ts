import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeCardComponent } from './card.component';

describe('WordsCardComponent', () => {
  let component: PracticeCardComponent;
  let fixture: ComponentFixture<PracticeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
