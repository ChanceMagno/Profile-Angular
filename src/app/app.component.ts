import { Component, ElementRef, OnInit, Inject, ViewChild, AfterViewInit} from '@angular/core';
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
      transform: 'translateY(-150%)',
    })),
    state('enlarge',   style({
      transform: 'scale(1.5)',
    })),
    state('spin',   style({
      transform: 'rotateY(180deg) translateX(150%) translateY(0%)'
    })),
    transition('* => up', animate('00ms ease-out')),
    transition('* => *', animate('5000ms ease')),
  ])
]
})


export class AppComponent implements OnInit{
  title = 'app';
  position: string;
  photoUrl = "../assets/images/rawpixel-com-296613.jpg";

  constructor(private scrollService: ScrollToService) { }

      ngOnInit(){
        this.changePosition('up');

      }

      testing(message){
        console.log(message)
      }

      scrollToTop(element) {
        this.scrollService.scrollTo(element, 500, -100);
    }


    changePosition(newPosition: string){
      this.position = newPosition;
    }

    public handleScroll(event: ScrollEvent) {
    if (event.isWindowEvent) {
      this.changePosition('spin')
    }

  }

}
