import { Component, OnInit, Input } from '@angular/core';
import { CorredorService } from '../corredor.service';
import { Corredor } from '../corredor/corredor.model';
import { CorredorDetailComponent } from '../corredor-detail/corredor-detail.component';
import { Observable } from 'rxjs/Observable';
import { MaterializeDirective } from 'angular2-materialize';
import { TimerService } from '../timer.service';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";

@Component({
  moduleId: module.id,
  selector: 'app-corredor-list',
  templateUrl: 'corredor-list.component.html',
  styleUrls: ['corredor-list.component.css'],
  directives: [CorredorDetailComponent, MaterializeDirective],
})
export class CorredorListComponent implements OnInit {

  constructor(
    private corredorService: CorredorService,
    private timer: TimerService
    ) {}

  corredores: any;
  currentCorredor: Corredor;
  @Input() running: boolean;

  ngOnInit() {
    this.corredorService.corredores$().subscribe(c => {
      this.corredores = c;
    })
    this.corredores = this.corredorService.getOnce();
    this.currentCorredor = new Corredor("");
    this.timer.isRunning().subscribe(r => this.running = r);
  }

  set(corredor){
    let time = this.timer.timerStorage;
    corredor.seconds = time.seconds;
    corredor.minutes = time.minutes;
    corredor.hours = time.hours;
    console.log(this.corredores);
    console.log(time);
    debugger;
    this.sort();
    console.log('sorted', this.corredores);
    this.corredorService.set(this.corredores);
  }

  remove(id){
    this.corredorService.remove(id);
  }

  editar(corredor){
    this.currentCorredor = corredor;
  }

  trackByCorredor(index: number, corr: Corredor){
    return corr.id;
  }

  sort(){
    this.corredores.sort((a,b) => this.corredorService.sortByTime(a,b));
  }

}
