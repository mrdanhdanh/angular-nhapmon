import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body002Component } from './body-002.component';

describe('Body002Component', () => {
  let component: Body002Component;
  let fixture: ComponentFixture<Body002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body002Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
