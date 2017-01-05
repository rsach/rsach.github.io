import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit,OnChanges {

	@Input('id') testimonial;
	animate:string='';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	if(this.testimonial){
  		this.animate = 'visible zoomIn'

  	}

  }

}
