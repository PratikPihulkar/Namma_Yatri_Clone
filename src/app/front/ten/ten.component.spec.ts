import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenComponent } from './ten.component';

describe('TenComponent', () => {
  let component: TenComponent;
  let fixture: ComponentFixture<TenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
