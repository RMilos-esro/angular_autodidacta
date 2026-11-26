import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEjemplo } from './formulario-ejemplo';

describe('FormularioEjemplo', () => {
  let component: FormularioEjemplo;
  let fixture: ComponentFixture<FormularioEjemplo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEjemplo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioEjemplo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
