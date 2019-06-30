import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchValue : String;
  listDroolsCopy: any[] =[];
  constructor(private httpService: HttpServiceService) {
  }

  ngOnInit() {
  }

  search(){
    this.httpService.listDrools = this.httpService.listDrools.filter(x => x.rule_name.toLowerCase().includes(this.searchValue.toLowerCase())
    || x.priority.toLowerCase().includes(this.searchValue.toLowerCase())
    || x.condition.toLowerCase().includes(this.searchValue.toLowerCase())
    || x.then.toLowerCase().includes(this.searchValue.toLowerCase())
    || x.comments.toLowerCase().includes(this.searchValue.toLowerCase()));
  }

  clear(){
    this.httpService.listDrools =  this.httpService.listDroolsCopy;
  }

}
