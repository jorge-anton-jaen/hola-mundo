import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturasComponent } from './capturas.component';

describe('CapturasComponent', () => {
  let component: CapturasComponent;
  let fixture: ComponentFixture<CapturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
