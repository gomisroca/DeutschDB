import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsCreateComponent } from './create.component';

describe('WordsCreateComponent', () => {
  let component: WordsCreateComponent;
  let fixture: ComponentFixture<WordsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordsCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WordsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
