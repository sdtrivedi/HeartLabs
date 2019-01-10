import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-very-angry-advice',
  templateUrl: './very-angry-advice.component.html',
  styleUrls: ['./very-angry-advice.component.css']
})
export class VeryAngryAdviceComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<VeryAngryAdviceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { } // for data

  ngOnInit() {
  }

  okay() {
    this.dialogRef.close('Dialog close here');
  }

}
