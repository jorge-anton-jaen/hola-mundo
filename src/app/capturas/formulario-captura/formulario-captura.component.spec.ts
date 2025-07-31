import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCapturaComponent } from './formulario-captura.component';

describe('FormularioCapturaComponent', () => {
  let component: FormularioCapturaComponent;
  let fixture: ComponentFixture<FormularioCapturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCapturaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCapturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
