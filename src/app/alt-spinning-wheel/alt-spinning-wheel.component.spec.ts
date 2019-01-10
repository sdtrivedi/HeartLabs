import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSpinningWheelComponent } from './alt-spinning-wheel.component';

describe('AltSpinningWheelComponent', () => {
  let component: AltSpinningWheelComponent;
  let fixture: ComponentFixture<AltSpinningWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSpinningWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltSpinningWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
