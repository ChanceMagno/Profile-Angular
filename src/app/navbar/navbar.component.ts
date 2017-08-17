import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output() scrollToAbout = new EventEmitter<Object>();
@Output() scrollToProjects = new EventEmitter<Object>();
@Output() scrollToContact = new EventEmitter<Object>();


  constructor() { }

  ngOnInit() {
  }



  emitAboutScroll(){
    this.scrollToAbout.emit()
  }

  emitProjectScroll(){
    this.scrollToProjects.emit()
  }

  emitContactScroll(){
    this.scrollToContact.emit();
  }

}
