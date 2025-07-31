import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoServiciosComponent } from './mantenimiento-servicios.component';

describe('MantenimientoServiciosComponent', () => {
  let component: MantenimientoServiciosComponent;
  let fixture: ComponentFixture<MantenimientoServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoServiciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
