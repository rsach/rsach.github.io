import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {

  constructor() { }
    _opened:boolean = false;


  ngOnInit() {
  }


  toggle1(){
    this._opened = !this._opened;
  }

  elementVis(id){
    console.log(id);
  }


  

}
