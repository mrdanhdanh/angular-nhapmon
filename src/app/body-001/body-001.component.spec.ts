import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body001Component } from './body-001.component';

describe('Body001Component', () => {
  let component: Body001Component;
  let fixture: ComponentFixture<Body001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Body001Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Body001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
