import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCardComponent } from './card.component';

describe('WordsCardComponent', () => {
  let component: WordsCardComponent;
  let fixture: ComponentFixture<WordsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
