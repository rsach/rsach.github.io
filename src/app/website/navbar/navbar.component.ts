import { Component, OnInit, HostListener,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	mobNavToggle:string = '';
	mobNavHeight:number = 30;
	visibility:string='';
  widthMobnav:number = 0;

  _opened:boolean = false;



  toggle:string =''


  @Input('id') id = 'start';
  constructor() { }

  ngOnInit() {
  	this.calculateHeight();
  }

  @HostListener('window:resize', ['$event'])
  calculateHeight(){
  	this.mobNavHeight = window.innerHeight;

  }

  toggle1(){
    this._opened = !this._opened;
  }




}
