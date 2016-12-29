import { Component, OnInit, transition, style, trigger, animate,HostListener } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
  animations: [
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(500, style({opacity:1})) 
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(500, style({opacity:0})) 
    ])
  ])
]
    
  
})
export class MessengerComponent implements OnInit {

	messengerBox:boolean= false;
	messengerOffsetTop:number;
	toggle:string='';
  constructor() {
  	this.messengerOffsetTop=0;
   }

  ngOnInit() {
  }


   @HostListener("window:scroll", ['$event'])
   onWindowScroll(){
   	this.messengerOffsetTop = this.scrollbarYPos();
   	console.log(this.messengerOffsetTop)

   }

   scrollbarYPos():number{
   	    return window.pageYOffset || document.documentElement.scrollTop;

   }


}
