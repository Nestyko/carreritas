import { Injectable, OnInit } from '@angular/core';
import { Corredor } from './corredor/corredor.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CorredorService{

  public _corredores$: Subject<Corredor[]>;

  private dataStore: {
    corredores: Corredor[];
  }


  constructor() {
    this.dataStore = {
      corredores: []
    }
    this._corredores$ = <Subject<Corredor[]>>new Subject();
  }

  corredores$() {
    return this._corredores$.asObservable();
  }

  sortByTime(a,b){
      return a.getTimeInSeconds() - b.getTimeInSeconds();
  }


  add(corredor: Corredor){
    let c = new Corredor(corredor.name);   
    this.dataStore.corredores.push(c);
    this.dataStore.corredores.sort(this.sortByTime);
    this._corredores$.next(this.dataStore.corredores);
  }

  remove(corredor: Corredor){
    let index = this.dataStore.corredores.indexOf(corredor);
    if(index !== -1){
      this.dataStore.corredores.splice(index, 1);
    }
  }

  
}
