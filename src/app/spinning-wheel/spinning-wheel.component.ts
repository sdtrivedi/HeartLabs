import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy, NgZone } from '@angular/core';
import * as WinWheel from 'winwheel';

declare var WinWheel: any;
@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.css']
})
export class SpinningWheelComponent implements OnInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;
  running: boolean;

  // segments = [
  //   {'fillStyle': '#FF2F92', 'text': 'Hiking'},
  //   {'fillStyle': '#FF2F92', 'text': 'Sunset Walk'},
  //   {'fillStyle': '#FF2F92', 'text': 'New Restaurant'},
  //   {'fillStyle': '#FF2F92', 'text': 'Cook a Homemade Meal'},
  //   {'fillStyle': '#FF2F92', 'text': 'Go Mini-Golfing'},
  //   {'fillStyle': '#FF2F92', 'text': 'Board Game Night'},
  //   {'fillStyle': '#FF2F92', 'text': 'Win the Most tickets at an Arcade'},
  //   {'fillStyle': '#FF2F92', 'text': 'Visit a Museum'},
  //   {'fillStyle': '#FF2F92', 'text': 'Ice Skating'},
  //   {'fillStyle': '#FF2F92', 'text': 'Rock Climbing'},
  //   {'fillStyle': '#FF2F92', 'text': 'Have a Picnic'},
  // ];
  //   {'fillStyle': '#FF2F92', 'text': 'Visit Planetarium'}
  // var wheel: Winwheel();

  constructor(private ngZone: NgZone) {
    var theWheel = new WinWheel({
      'numSegments'  : 12,     // Specify number of segments.
      'outerRadius'  : 212,   // Set outer radius so wheel fits inside the background.
      'textFontSize' : 10,    // Set font size as desired.
      'segments'     :        // Define segments including colour and text.
      [
         {'fillStyle' : '#FF2F92', 'text' : 'Hiking'},
         {'fillStyle' : '#FF2F92', 'text' : 'Sunset Walk'},
         {'fillStyle' : '#FF2F92', 'text' : 'New Restaurant'},
         {'fillStyle' : '#FF2F92', 'text' : 'Cook a Homemade Meal'},
         {'fillStyle' : '#FF2F92', 'text' : 'Go Mini-Golfing'},
         {'fillStyle' : '#FF2F92', 'text' : 'Board Game Night'},
         {'fillStyle' : '#FF2F92', 'text' : 'Win the Most tickets at an Arcade'},
         {'fillStyle' : '#FF2F92', 'text' : 'Visit a Museum'},
          {'fillStyle' : '#FF2F92', 'text' : 'Ice Skating'},
          {'fillStyle' : '#FF2F92', 'text' : 'Rock Climbing'},
          {'fillStyle' : '#FF2F92', 'text' : 'Have a Picnic'},
          {'fillStyle' : '#FF2F92', 'text' : 'Visit Planetarium'}
      ],
      'animation' :           // Specify the animation to use.
      {
          'type'     : 'spinToStop',
          'duration' : 10,     // Duration in seconds.
          'spins'    : 6,     // Number of complete spins.
          //'callbackFinished' : alertPrize
      }
  });
  }

  ngOnInit() {
    // let ctx = this.canvasRef.nativeElement.getContext('2d');
    // ctx.moveTo(125,30);
    this.running = true;
    this.ngZone.runOutsideAngular(() => this.paint());
  }

  private paint() {
    if (!this.running) {
      return;
    }
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');
    ctx.fillStyle = 'rgb(221, 0, 49)';
    ctx.fillRect(0, 0, 800, 500);

    ctx.beginPath();
    ctx.fillStyle = `rgb(255, 255, 255)`;

    requestAnimationFrame(() => this.paint());
  }

}
