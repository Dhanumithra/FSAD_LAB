import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hey } from './hey';

describe('Hey', () => {
  let component: Hey;
  let fixture: ComponentFixture<Hey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hey],
    }).compileComponents();

    fixture = TestBed.createComponent(Hey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
