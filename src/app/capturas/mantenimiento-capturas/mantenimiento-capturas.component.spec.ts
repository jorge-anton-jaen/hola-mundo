import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCapturasComponent } from './mantenimiento-capturas.component';

describe('MantenimientoCapturasComponent', () => {
  let component: MantenimientoCapturasComponent;
  let fixture: ComponentFixture<MantenimientoCapturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoCapturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoCapturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
