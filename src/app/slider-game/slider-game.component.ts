import { Component, OnInit } from '@angular/core';
import {MatSlider} from '@angular/material/slider';
import {coerceNumberProperty} from '@angular/cdk/coercion';

@Component({
  selector: 'app-slider-game',
  templateUrl: './slider-game.component.html',
  styleUrls: ['./slider-game.component.css']
})

/**
 * @title Configurable slider
 */
export class SliderGameComponent implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 5;
  thumbLabel = false;
  value = 0;
  vertical = false;
  exampleAnswer = 37;
  correctAnswer = false;
  computedVal: number;
  wrongAnswer = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;

  ngOnInit() {

  }

  checkAnswer() {
    this.computedVal = this.value - this.exampleAnswer;
    if ((this.computedVal > 0 && this.computedVal < 5) || (this.computedVal < 0 && this.computedVal > -5)) {
      this.correctAnswer = true;
      this.wrongAnswer = false;
    } else {
      this.correctAnswer = false;
      this.wrongAnswer = true;
    }
  }

}
