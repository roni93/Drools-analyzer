import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl:string = 'http://localhost:5002';
  firstStep : boolean = true;
  listDrools: any[];
  numberOfEtd: number;
  numberOfJournal: number;
  numberOfPaper: number;
  numberOfAll: number;
  listDroolsCopy: any[] =[];
  numberOfBook: number;
  numberOfBookChapter: number;
  numberOfConferenceProceeding: number;
  numberOfConferencePresentation: number;
  numberOfPresentation: number;

  constructor(private httpClient : HttpClient) {}

  hideFirstStep() {
    this.firstStep = false;
  }

  get_drools_by_type(type){
    let drools_by_type = this.httpClient.get(this.baseUrl + '/Drools/' + type);
    drools_by_type.subscribe((x: any) => {this.listDrools = x;
                                          this.listDroolsCopy = [];
                                          for (let drool in this.listDrools){
                                          this.listDroolsCopy.push(this.listDrools[drool]);
                                          }
     });

  }

    get_drools(text){

    let drools =  this.httpClient.post(this.baseUrl + '/Drools', text);
    drools.subscribe((x: any) => {this.listDrools = x
                                  this.numberOfEtd = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('etd')).length;
                                  this.numberOfJournal = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('journal')).length;
                                  this.numberOfPaper = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('conferencepaper')).length;
                                  this.numberOfBook = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('book')).length;
                                  this.numberOfBookChapter = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('bookchapter')).length;
                                  this.numberOfConferenceProceeding = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('conferenceproceeding')).length;
                                  this.numberOfConferencePresentation = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('conferencepresentation')).length;
                                  this.numberOfPresentation = this.listDrools.filter( x => x.rule_name.toLowerCase().includes('conference.presentation')).length;
                                  this.numberOfAll = this.listDrools.length;

    } );


  }


}
