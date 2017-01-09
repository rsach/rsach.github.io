import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit,OnChanges {

  constructor() { }
    _opened:boolean = false;
    visibility:string='visible';
    toggle:string = '';
    mobNavOffsetTop:number =5;
    id:string='start';


  ngOnInit() {
  }


  toggle1(){
    this._opened = !this._opened;
    
    this.elementVis(this._opened);
    
      
    
  }

  elementVis(opened){
      this.visibility= opened?'hidden':'visible';  

    }


  ngOnChanges(){
    console.log(this._opened)


  }

  mobNavPosition(event){
    console.log(event);
    this.mobNavOffsetTop = event?10:5;

  }

  navActive(event){
    this.id = event;
    
  }


  

}
