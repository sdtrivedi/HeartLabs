import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calm',
  templateUrl: './calm.component.html',
  styleUrls: ['./calm.component.css']
})
export class CalmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CalmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  home() {
    this.dialogRef.close('Dialog Closed here');
  }

}
