import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-drools-list',
  templateUrl: './drools-list.component.html',
  styleUrls: ['./drools-list.component.css']
})
export class DroolsListComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }

  ngOnInit() {
  }

  getListDrools(){
    return this.httpService.listDrools;
  }

}
