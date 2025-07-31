import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioColoniaComponent } from './formulario-colonia.component';

describe('FormularioColoniaComponent', () => {
  let component: FormularioColoniaComponent;
  let fixture: ComponentFixture<FormularioColoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioColoniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioColoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
