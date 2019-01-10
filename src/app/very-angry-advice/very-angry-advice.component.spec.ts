import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryAngryAdviceComponent } from './very-angry-advice.component';

describe('VeryAngryAdviceComponent', () => {
  let component: VeryAngryAdviceComponent;
  let fixture: ComponentFixture<VeryAngryAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryAngryAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryAngryAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
