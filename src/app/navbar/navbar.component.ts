import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Output() scrollToAbout = new EventEmitter<Object>();
@Output() scrollToProjects = new EventEmitter<Object>();
@Output() scrollToContact = new EventEmitter<Object>();
about: any;
projects: any;
contact: any;
@Input() message: string;

  constructor() { }

  ngOnInit() {
    this.about = 'about'
    this.projects = 'projects'
    this.contact = 'contact'
  }

  test(tabName: any){
    if(tabName === this.about){
      return "active"
    } else if(tabName === this.projects){
      return ""
      }else if(tabName === this.contact){
        return ""
    } else {return "active"}
  }

  testing(message: string){
    console.log("got here" + message)
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
