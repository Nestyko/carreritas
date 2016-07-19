import { Injectable, OnInit } from '@angular/core';
import { Corredor } from './corredor/corredor.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";


@Injectable()
export class CorredorService{

  public _corredores$: Subject<Corredor[]>;

  @SessionStorage() private dataStore: {
    corredores: Corredor[];
  }


  constructor() {
    this.dataStore = {
      corredores: []
    }
    this._corredores$ = <Subject<Corredor[]>>new Subject();
  }

  getOnce(){
    return this.dataStore.corredores;
  }

  corredores$() {
    return this._corredores$.asObservable();
  }

  sortByTime(a,b){
      return this.calculateTime(a) - this.calculateTime(b);
  }

  private calculateTime(corredor){
    let secs = 0;
        if(corredor.hours){
            secs += corredor.hours * 60 * 60; 
        }
        return secs + corredor.minutes*60+corredor.seconds;
  }

  set(corredores: Corredor[]){
    this.dataStore.corredores = corredores;
    this._corredores$.next(corredores);
  }


  add(corredor: Corredor){
    let c = new Corredor(corredor.name);   
    this.dataStore.corredores.push(c);
    this.dataStore.corredores.sort(this.sortByTime);
    this._corredores$.next(this.dataStore.corredores);
  }

  remove(id: number){
    this.dataStore.corredores = this.dataStore.corredores.filter(c => c.id !== id);
    this._corredores$.next(this.dataStore.corredores);
  }

  
}
