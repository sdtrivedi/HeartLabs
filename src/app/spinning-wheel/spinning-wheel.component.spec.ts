import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningWheelComponent } from './spinning-wheel.component';

describe('SpinningWheelComponent', () => {
  let component: SpinningWheelComponent;
  let fixture: ComponentFixture<SpinningWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
