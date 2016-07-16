import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import "angular2-materialize";
import {LocalStorageService, LocalStorageSubscriber} from 'angular2-localstorage/LocalStorageEmitter';

if (environment.production) {
  enableProdMode();
}

let appPromise = bootstrap(AppComponent, [ LocalStorageService ]);

LocalStorageSubscriber(appPromise);
