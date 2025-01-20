import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhComponent } from './seventh.component';

describe('SeventhComponent', () => {
  let component: SeventhComponent;
  let fixture: ComponentFixture<SeventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeventhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
