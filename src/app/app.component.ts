import { Component, OnInit, HostListener, AfterViewInit, OnDestroy} from '@angular/core';
// import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


import {SimpleTimer} from 'ng2-simple-timer';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnDestroy{

	loading:boolean = true;
	private sub: any;


	constructor(private st: SimpleTimer,
				// private router: Router,
				private slimLoader: SlimLoadingBarService){

		      //   this.sub = this.router.events.subscribe(event => {
        //     if (event instanceof NavigationStart) {
        //         this.slimLoader.start();
        //     } else if ( event instanceof NavigationEnd ||
        //                 event instanceof NavigationCancel ||
        //                 event instanceof NavigationError) {
        //         this.slimLoader.complete();
        //     }
        // }, (error: any) => {
        //         this.slimLoader.complete();
        // });
        this.slimLoader.start();
        this.loading = true;
        setTimeout(()=>{
        	this.loading = false;
        	this.slimLoader.complete();
        },3000);



	}

	ngAfterViewInit(){

		

	}


	ngOnDestroy(): any {
    }

	

}
