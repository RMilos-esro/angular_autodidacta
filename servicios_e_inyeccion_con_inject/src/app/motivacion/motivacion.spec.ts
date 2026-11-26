import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Motivacion } from './motivacion';

describe('Motivacion', () => {
  let component: Motivacion;
  let fixture: ComponentFixture<Motivacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Motivacion],
    }).compileComponents();

    fixture = TestBed.createComponent(Motivacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
