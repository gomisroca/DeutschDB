import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsUpdateComponent } from './update.component';

describe('VerbsUpdateComponent', () => {
  let component: VerbsUpdateComponent;
  let fixture: ComponentFixture<VerbsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbsUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerbsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
