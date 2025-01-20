import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevenComponent } from './eleven.component';

describe('ElevenComponent', () => {
  let component: ElevenComponent;
  let fixture: ComponentFixture<ElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElevenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
