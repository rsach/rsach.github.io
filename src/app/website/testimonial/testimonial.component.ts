import { Component, OnInit, Input, OnChanges, ElementRef,  ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit,OnChanges,AfterViewInit {

	@Input('id') testimonial;
	animate:string='';
  @ViewChild('testimo') el:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	if(this.testimonial){
  		this.animate = 'visible zoomIn'

  	}

  }

  ngAfterViewInit(){
    console.log(this.el);
  }

}
