import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarUpdateComponent } from './update.component';

describe('GrammarUpdateComponent', () => {
  let component: GrammarUpdateComponent;
  let fixture: ComponentFixture<GrammarUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrammarUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
