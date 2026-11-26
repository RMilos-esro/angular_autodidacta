import { TestBed } from '@angular/core/testing';

import { Frases } from './frases';

describe('Frases', () => {
  let service: Frases;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frases);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
