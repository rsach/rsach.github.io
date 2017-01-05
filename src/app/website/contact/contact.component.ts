import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit,OnChanges {

	@ViewChild('contact') el:ElementRef;
	offsetTop:number =0;
  @Input('id') contact;
  animate:string=''

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


  ngOnChanges(){
    this.onResize();
    if(this.contact){
      this.animate = 'flipInY visible'; 
    }
  }

}
