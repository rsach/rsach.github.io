import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit {

	@ViewChild('contact') el:ElementRef;
	offsetTop:number =0;

  constructor() {

   }



  ngOnInit() {
   setTimeout(()=>{
          this.onResize();
        },100);
  	
  
  }

  ngAfterViewInit(){

  	}

  @HostListener('window:resize', ['$event'])
  onResize(){

  	this.offsetTop = this.el.nativeElement.offsetTop+50;

  }

}
