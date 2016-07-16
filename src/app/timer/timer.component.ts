import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class TimerComponent implements OnInit {

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

  start(){
    this.timer.start();
  }

  stop(){
    this.timer.stop();
  }

  reset(){
    this.timer.reset();
  }

  

}
