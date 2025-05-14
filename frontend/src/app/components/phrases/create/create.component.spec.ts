import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhrasesCreateComponent } from './create.component';

describe('PhrasesCreateComponent', () => {
  let component: PhrasesCreateComponent;
  let fixture: ComponentFixture<PhrasesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhrasesCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PhrasesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
