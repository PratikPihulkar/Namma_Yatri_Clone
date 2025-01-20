import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownlodAppComponent } from './downlod-app.component';

describe('DownlodAppComponent', () => {
  let component: DownlodAppComponent;
  let fixture: ComponentFixture<DownlodAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownlodAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownlodAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
