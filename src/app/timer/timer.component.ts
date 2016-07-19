import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  moduleId: module.id,
  selector: 'app-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class TimerComponent implements OnInit {

  public running:boolean = false;

  constructor(private timer: TimerService) {}

  ngOnInit() {
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
