import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit,OnChanges {


	@Input('id') id ;
	animate:string='';

  constructor() {
  	

   }

  ngOnInit() {
  }


  ngOnChanges(){
  	if(this.id){
  		this.animate='visible fadeInDown'


  	}
  }


  skillIncrement(value){
    if(true){

    }

  }

}
