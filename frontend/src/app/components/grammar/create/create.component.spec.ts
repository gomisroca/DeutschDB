import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarCreateComponent } from './create.component';

describe('GrammarCreateComponent', () => {
  let component: GrammarCreateComponent;
  let fixture: ComponentFixture<GrammarCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrammarCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
