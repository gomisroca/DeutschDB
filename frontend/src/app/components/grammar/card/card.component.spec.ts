import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCardComponent } from './card.component';

describe('GrammarCardComponent', () => {
  let component: GrammarCardComponent;
  let fixture: ComponentFixture<GrammarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrammarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
