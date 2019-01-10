import { Component, OnInit, ElementRef } from '@angular/core';
import { $ } from 'protractor';
import { resolve } from 'url';
import { resetApplicationState } from '@angular/core/src/render3/instructions';
import { InstructionsComponent } from '../instructions/instructions.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-alt-spinning-wheel',
  templateUrl: './alt-spinning-wheel.component.html',
  styleUrls: ['./alt-spinning-wheel.component.css']
})
export class AltSpinningWheelComponent implements OnInit {

  private one_on = false;
  private two_on = false;
  private three_on = false;
  private four_on = false;
  private five_on = false;
  private six_on = false;
  private seven_on = false;
  private eight_on = false;
  private nine_on = false;

  constructor(private elRef: ElementRef, public dialog: MatDialog) { }

  ngOnInit() {
    // this.lightsOut();
    // console.log('her')
  }

  rndPicker() {
    console.log('Clicked');
    let rndNumber: number;
    this.reset();
    //let i = 5;
    //for (i; i >= 1; i--) {

    rndNumber = Math.floor(Math.random() * 9) + 1;
    console.log(rndNumber);
    //}
    this.divPicker(rndNumber);
    return rndNumber;
  }

  divPicker(rndNumber) {
    if (rndNumber === 1) {
      this.one_on = true;
    } else if (rndNumber === 2) {
      this.two_on = true;
    } else if (rndNumber === 3) {
      this.three_on = true;
    } else if (rndNumber === 4) {
      this.four_on = true;
    } else if (rndNumber === 5) {
      this.five_on = true;
    } else if (rndNumber === 6) {
      this.six_on = true;
    } else if (rndNumber === 7) {
      this.seven_on = true;
    } else if (rndNumber === 8) {
      this.eight_on = true;
    } else if (rndNumber === 9) {
      this.nine_on = true;
    }
  }

  reset() {
    this.one_on = false;
    this.two_on = false;
    this.three_on = false;
    this.four_on = false;
    this.five_on = false;
    this.six_on = false;
    this.seven_on = false;
    this.eight_on = false;
    this.nine_on = false;
  }


  openInstructionsDialog(): void {
    const dialogRef = this.dialog.open(InstructionsComponent, {
      //data: {name: this.name, animal: this.animal}
      data : {one_status: this.one_on, two_status: this.two_on, three_status: this.three_on,
      four_status: this.four_on, five_status: this.five_on, six_status: this.six_on,
    seven_status: this.seven_on, eight_status: this.eight_on, nine_status: this.nine_on}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialoge was closed');
      //this.animal = result;
      // if (result) {
      //   this.stringVal = 'Good job! Now how do you feel?';
      //   this.VACount += 1;
      //   console.log(this.VACount);
      // }

    });
  }


}
