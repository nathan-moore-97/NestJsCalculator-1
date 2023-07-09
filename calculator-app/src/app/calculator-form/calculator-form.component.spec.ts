import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorFormComponent } from './calculator-form.component';

describe('CalculatorFormComponent', () => {
  let component: CalculatorFormComponent;
  let fixture: ComponentFixture<CalculatorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorFormComponent]
    });
    fixture = TestBed.createComponent(CalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
