import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCreado } from './componente-creado';

describe('ComponenteCreado', () => {
  let component: ComponenteCreado;
  let fixture: ComponentFixture<ComponenteCreado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteCreado],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponenteCreado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
