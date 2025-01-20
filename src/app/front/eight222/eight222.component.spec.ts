import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eight222Component } from './eight222.component';

describe('Eight222Component', () => {
  let component: Eight222Component;
  let fixture: ComponentFixture<Eight222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Eight222Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eight222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
