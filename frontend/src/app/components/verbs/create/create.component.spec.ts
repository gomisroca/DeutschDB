import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsCreateComponent } from './create.component';

describe('VerbsCreateComponent', () => {
  let component: VerbsCreateComponent;
  let fixture: ComponentFixture<VerbsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbsCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerbsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
