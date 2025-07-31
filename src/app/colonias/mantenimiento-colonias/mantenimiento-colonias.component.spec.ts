import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoColoniasComponent } from './mantenimiento-colonias.component';

describe('MantenimientoColoniasComponent', () => {
  let component: MantenimientoColoniasComponent;
  let fixture: ComponentFixture<MantenimientoColoniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MantenimientoColoniasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantenimientoColoniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
