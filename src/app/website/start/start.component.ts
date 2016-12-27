import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  startHeight:number;
  constructor() { }

  ngOnInit() {
  	this.calculateHeight();

  }

  @HostListener('window:resize', ['$event'])
  calculateHeight(){
  	this.startHeight = window.innerHeight;
  }

}
