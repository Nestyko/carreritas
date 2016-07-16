import { Component, OnInit } from '@angular/core';
import { Corredor } from './corredor.model';
import { CorredorService } from '../corredor.service';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-corredor',
  templateUrl: 'corredor.component.html',
  styleUrls: ['corredor.component.css'],
})
export class CorredorComponent implements OnInit {

  constructor(private corredorService: CorredorService) {
    

  }


  corredor:Corredor;

  ngOnInit() {
    this.corredor = new Corredor("");
  }



  save(){
    this.corredorService.add(this.corredor);
    this.corredor.name = "";
  }

}
