import { Component, OnInit, transition,
         style, trigger, animate,
         HostListener, Input, OnChanges,
         Output, EventEmitter } from '@angular/core';

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
export class MessengerComponent implements OnInit,OnChanges {

	@Input('box') messengerBox:boolean= false;
	messengerOffsetTop:number;
	toggle:string='';
  @Output('onClose1') onClose1 = new EventEmitter();
   

  constructor() {
  	this.messengerOffsetTop=0;
   }

  ngOnInit() {
  }


   @HostListener("window:scroll", ['$event'])
   onWindowScroll(){

   	this.messengerOffsetTop = this.scrollbarYPos();

   }

   scrollbarYPos():number{
   	    return window.pageYOffset || document.documentElement.scrollTop;

   }

   ngOnChanges(){

  
   }

   onToggle(){
     this.messengerBox = !this.messengerBox;
     this.onClose1.emit(this.messengerBox);
   }


}
