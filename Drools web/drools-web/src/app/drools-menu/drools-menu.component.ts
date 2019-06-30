import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-drools-menu',
  templateUrl: './drools-menu.component.html',
  styleUrls: ['./drools-menu.component.css']
})
export class DroolsMenuComponent implements OnInit {

  constructor(private httpService: HttpServiceService) { }
  ngOnInit() {
  }


  getListDrools(){
    return this.httpService.listDrools;
  }

  get_number_of_ETD(){
    return this.httpService.numberOfEtd;
  }

  getETDs(){
    this.httpService.get_drools_by_type("etd");
  }
  getJournal(){
    this.httpService.get_drools_by_type("journal");

  }
  getPaper(){
    this.httpService.get_drools_by_type("conferencepaper");
  }

  get_number_of_journal(){
    return this.httpService.numberOfJournal;
  }

  get_number_of_paper(){
    return this.httpService.numberOfPaper;
  }

  getAll(){
    this.httpService.get_drools_by_type("all");
  }
  get_number_of_All(){
    return this.httpService.numberOfAll;
  }

  getBook(){
    this.httpService.get_drools_by_type("book");
  }

  getBookChapter(){
    this.httpService.get_drools_by_type("bookChapter");
  }

  getConferenceProceeding(){
    this.httpService.get_drools_by_type("conferenceproceeding");
  }

  get_number_of_conference_proceeding(){
    return this.httpService.numberOfConferenceProceeding;

  }

  getConferencePresentation(){
    this.httpService.get_drools_by_type("conferencepresentation");
  }

  getPresentation(){
    this.httpService.get_drools_by_type("conference.presentation");
  }

  get_number_of_presentation(){
    return this.httpService.numberOfPresentation;
  }
  get_number_of_conference_presentation(){
    return this.httpService.numberOfConferencePresentation;
  }


  get_number_of_book(){
    return this.httpService.numberOfBook;

  }

  get_number_of_book_chapter(){
    return this.httpService.numberOfBookChapter;

  }

}
