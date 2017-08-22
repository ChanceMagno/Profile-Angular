import { Component, ElementRef, OnInit, Inject, ViewChild, AfterViewInit, EventEmitter, Output, Input} from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { trigger,state,style,animate,transition } from '@angular/animations';
import { ScrollEvent } from 'ngx-scroll-event';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT} from '@angular/common';
import { ScrollToService } from 'ng2-scroll-to-el';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger('photoState', [
    state('move', style({
      transform: 'translateX(-150%)',
    })),
    state('up', style({
      transform: 'translateY(-150%) translateX(75%)' ,
    })),
    state('enlarge',   style({
      transform: 'scale(1.5)',
    })),
    state('spin',   style({
      transform: 'rotateY(180deg) translateX(45%) translateY(0%)'
    })),
    transition('* => up', animate('0ms ease-out')),
    transition('up => *', animate('4000ms ease')),
  ]),
  trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('3000ms ease-in'))
    ])
  ]
})


export class AppComponent implements OnInit, AfterViewInit{
  title = 'app';
  position: string;
  photoUrl = "../assets/images/rawpixel-com-296613.jpg";
  show = false;
  @Output() sendMessage= new EventEmitter<string>();
    message: any;

  constructor(private scrollService: ScrollToService) { }

      ngOnInit(){
      }

      logAnimation($event) {
        console.log(`${this.position} animation ${$event.phaseName}`)
      }

      ngAfterViewInit(){

      }

      get stateName() {
        return this.show ? 'show' : 'hide'
      }

      fadeInContent(){
        this.show = !this.show;
      }

      scrollToTop(element) {
        this.scrollService.scrollTo(element, 500, -100);
    }

    changePosition(newPosition: string){
      this.position = newPosition;
    }

    public handleScroll(event: ScrollEvent) {
      if(!this.show){
        this.fadeInContent()
      }
    }

}
