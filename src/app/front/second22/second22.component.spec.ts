import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Second22Component } from './second22.component';

describe('Second22Component', () => {
  let component: Second22Component;
  let fixture: ComponentFixture<Second22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Second22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Second22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
