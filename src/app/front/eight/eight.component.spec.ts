import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightComponent } from './eight.component';

describe('EightComponent', () => {
  let component: EightComponent;
  let fixture: ComponentFixture<EightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
