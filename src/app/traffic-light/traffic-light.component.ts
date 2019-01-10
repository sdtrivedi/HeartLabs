import { Component, OnInit, ViewChild, ElementRef, NgZone, inject } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatSnackBarConfig} from '@angular/material';
import { VeryAngryAdviceComponent } from '../very-angry-advice/very-angry-advice.component';
import { LittleAngryAdviceComponent } from '../little-angry-advice/little-angry-advice.component';
import { CalmComponent } from '../calm/calm.component';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent implements OnInit {

  //private toggleText = 'Hide';
  private show = true;
  private count = 0;
  private text = 'Very Angry';
  private stringVal = 'Please select a zone that accurately describes how angry you feel right now';
  private VACount = 1;
  private LACount = 1;
  private flagToChangeGame = false;

  public ToggleRedZone() {
    if (this.text === 'Very Angry') {
      this.count++;
    }
    this.show = !this.show;
    this.text = this.show ? 'Hide Advice' : 'Very Angry';
    console.log('Calling Toggle for ' + this.count + 'time');
  }
  constructor(public dialog: MatDialog) { }

  openVAngryDialog(): void {
    const dialogRef = this.dialog.open(VeryAngryAdviceComponent, {
      //data: {name: this.name, animal: this.animal}
      data : {VACount : this.VACount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialoge was closed');
      //this.animal = result;
      if (result) {
        this.stringVal = 'Good job! Now how do you feel?';
        this.VACount += 1;
        console.log(this.VACount);
      }

    });
  }

  openLAngryDialog(): void {
    const dialogRef = this.dialog.open(LittleAngryAdviceComponent, {
      //data: {name: this.name, animal: this.animal}
      data: {LACount : this.LACount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialoge was closed');
      //this.animal = result;
      if (result) {
        this.stringVal = 'Great going! Lets keep going! How do you feel now?';
        this.LACount += 1;
        console.log(this.VACount);
      }

    });
  }

  openCalmDialog() {
    const dialogRef = this.dialog.open(CalmComponent, {
      //data: {name: this.name, animal: this.animal}
      //data: {LACount : this.LACount}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialoge was closed');
      //this.animal = result;
      if (result) {
        this.show = false;
        this.stringVal = "Awesome work! Now try something from here";
      }

    });
  }


  ngOnInit() {
  }

}
