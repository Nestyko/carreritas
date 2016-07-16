import { Component, OnInit, Input } from '@angular/core';
import { Corredor } from '../corredor/corredor.model';


@Component({
  moduleId: module.id,
  selector: 'app-corredor-detail',
  templateUrl: 'corredor-detail.component.html',
  styleUrls: ['corredor-detail.component.css']
})
export class CorredorDetailComponent implements OnInit {

  constructor() {}

  @Input() corredor: Corredor;

  ngOnInit() {
  }

}
