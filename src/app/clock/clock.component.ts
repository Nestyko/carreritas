import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  moduleId: module.id,
  selector: 'app-clock',
  templateUrl: 'clock.component.html',
  styleUrls: ['clock.component.css']
})
export class ClockComponent implements OnInit {

  hours:number = 0;
  minutes:number = 0;
  seconds:number = 0;
  centiSeconds:number = 0;
  private interval: any;
  public running:boolean = false;

  constructor(private timer: TimerService) {}

  ngOnInit() {
    this.timer.getTime().subscribe( timer => {
      this.hours = timer.hours;
      this.minutes = timer.minutes;
      this.seconds = timer.seconds;
      this.centiSeconds = timer.centiSeconds;
    })
    this.timer.isRunning().subscribe( r => this.running = r);
  }
}
