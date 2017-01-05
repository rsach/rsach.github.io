import { Component, OnInit, Output, EventEmitter } from '@angular/core';
	



@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  
	id='start';
  resume:string;
  testimonial:string;
  posts:string;
  contact:string;
  constructor() { }

  elementVis(event){
  	this.id=event;

    if(this.id == 'resume'){
      this.resume = 'resume';
    }else if(this.id == 'testimonial'){
      this.testimonial = 'testimonial';
    }else if(this.id == 'posts'){
      this.posts = 'posts';
    }else if(this.id == 'contact'){
      this.contact = 'contact';
    }


  }

  ngOnInit() {
  	
  }

}
