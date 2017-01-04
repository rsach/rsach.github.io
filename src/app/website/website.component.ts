import { Component, OnInit, Output, EventEmitter } from '@angular/core';
	



@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  
	id='start';
  constructor() { }

  elementVis(event){
  	this.id=event;


  }

  ngOnInit() {
  	
  }

}
