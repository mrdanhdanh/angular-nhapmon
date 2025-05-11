import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body003Component } from './body-003.component';

describe('Body003Component', () => {
  let component: Body003Component;
  let fixture: ComponentFixture<Body003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body003Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
