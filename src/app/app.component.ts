import { Component, ElementRef, OnInit, AfterViewInit} from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import * as $ from 'jquery';

import * as Materialize from 'materialize-css';


declare let $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  Materialize:any;
  constructor() {
    }


    ngOnInit(){


    }
goHere(){
  window.scroll({
top: 2500,
left: 0,
behavior: 'smooth'
});
}


    ngAfterViewInit(){
      $('.scrollspy').scrollSpy();
    }






}
