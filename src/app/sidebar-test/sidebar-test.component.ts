import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-sidebar-test',
  templateUrl: './sidebar-test.component.html',
  styleUrls: ['./sidebar-test.component.css']
})
export class SidebarTestComponent implements OnInit {

	@Input('toggle')toggle:string =''
  constructor() { }

  ngOnInit() {
  }

}
