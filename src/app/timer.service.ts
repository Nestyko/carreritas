import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

interface Time{
  hours?:number,
  minutes:number,
  seconds:number,
  centiSeconds:number,
}

@Injectable()
export class TimerService {

  private _timer$: Subject<Time>;
  private _running$: Subject<boolean>;
  public timerStorage: Time;
  private interval: any;
  public running: boolean = false;

  constructor() {
    this._timer$ = <Subject<Time>>new Subject();
    this._running$ = <Subject<boolean>>new Subject();
    this.timerStorage = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      centiSeconds: 0,
    }
    this.interval = null;
  }

  getTime(){
    return this._timer$.asObservable();
  }

  isRunning(){
    return this._running$.asObservable();
  }

  start(){
    if(this.interval){
      this.running = true;
      return;
    }
    this.interval = setInterval(() => this.countCentiSecond(), 10);
    this.running = true;
    this._running$.next(this.running);
  }

  stop(){
    this.running = false;
    this._running$.next(this.running);
    if(!this.interval){
      return;
    }
    clearInterval(this.interval);
    this.interval = null;
  }

  reset(){
    this.stop();
    this.timerStorage = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      centiSeconds: 0,
    }
    this._timer$.next(this.timerStorage);
  }


  private countCentiSecond(){
    this.timerStorage.centiSeconds++;
    if(this.timerStorage.centiSeconds > 99){
      this.timerStorage.centiSeconds = 0;
      this.timerStorage.seconds++;
      if(this.timerStorage.seconds > 59){
        this.timerStorage.seconds = 0;
        this.timerStorage.minutes++;
        if(this.timerStorage.minutes > 59){
          this.timerStorage.minutes = 0;
         this.timerStorage.hours++;
        }
      }
    }
    this._timer$.next(this.timerStorage);
    
  }

}
