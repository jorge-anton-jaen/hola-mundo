import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoniasComponent } from './colonias.component';

describe('ColoniasComponent', () => {
  let component: ColoniasComponent;
  let fixture: ComponentFixture<ColoniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColoniasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
