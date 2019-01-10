import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderGameComponent } from './slider-game.component';

describe('SliderGameComponent', () => {
  let component: SliderGameComponent;
  let fixture: ComponentFixture<SliderGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
