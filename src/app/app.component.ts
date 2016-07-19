import { Component } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';
import { TimerComponent } from './timer/timer.component';
import { CorredorComponent } from './corredor/corredor.component';
import { CorredorListComponent } from './corredor-list/corredor-list.component';
import { CorredorService } from './corredor.service';
import { TimerService } from './timer.service';
import { LocalStorageService } from 'angular2-localstorage/LocalStorageEmitter';
import { ClockComponent } from './clock/clock.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    MaterializeDirective, 
    TimerComponent, 
    CorredorComponent, 
    CorredorListComponent, 
    ClockComponent
    ],
  providers: [
    CorredorService, 
    TimerService, 
    LocalStorageService
    ]
})
export class AppComponent {

  constructor(private storageService: LocalStorageService) { }
  
}
