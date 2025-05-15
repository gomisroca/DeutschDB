import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsUpdateComponent } from './update.component';

describe('WordsUpdateComponent', () => {
  let component: WordsUpdateComponent;
  let fixture: ComponentFixture<WordsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
