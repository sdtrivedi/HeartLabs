import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleAngryAdviceComponent } from './little-angry-advice.component';

describe('LittleAngryAdviceComponent', () => {
  let component: LittleAngryAdviceComponent;
  let fixture: ComponentFixture<LittleAngryAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleAngryAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleAngryAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
