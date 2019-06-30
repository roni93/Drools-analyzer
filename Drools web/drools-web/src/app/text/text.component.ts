import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  textValue : String;

  constructor(private httpService: HttpServiceService, private router: Router) { }
  title = 'make my drool';

  ngOnInit() {
  }

isFirstStep(){
  return this.httpService.firstStep;
}
sendText(){
  this.httpService.get_drools(this.textValue);

  }

}
