import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  	height:number = 50;
  	width:number = 50;

  	

	ngOnInit() {

  		this.width = window.innerWidth;
  		this.height = window.innerHeight;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
	  this.width = event.target.innerWidth;
	  this.height = event.target.innerHeight;
	}

}
