import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-little-angry-advice',
  templateUrl: './little-angry-advice.component.html',
  styleUrls: ['./little-angry-advice.component.css']
})
export class LittleAngryAdviceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LittleAngryAdviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  okay() {
    this.dialogRef.close('Dialog Closed here');
  }

}
