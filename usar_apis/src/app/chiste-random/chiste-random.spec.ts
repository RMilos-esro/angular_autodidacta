import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChisteRandom } from './chiste-random';

describe('ChisteRandom', () => {
  let component: ChisteRandom;
  let fixture: ComponentFixture<ChisteRandom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChisteRandom],
    }).compileComponents();

    fixture = TestBed.createComponent(ChisteRandom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
