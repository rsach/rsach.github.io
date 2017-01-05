import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit,OnChanges {

		@Input('id') posts;
		animate:string='';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

  	if(this.posts){
  		this.animate = 'fadeInUp visible';
  	}

  }

}
