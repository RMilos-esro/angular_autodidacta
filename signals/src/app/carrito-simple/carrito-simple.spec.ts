import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoSimple } from './carrito-simple';

describe('CarritoSimple', () => {
  let component: CarritoSimple;
  let fixture: ComponentFixture<CarritoSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoSimple],
    }).compileComponents();

    fixture = TestBed.createComponent(CarritoSimple);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
