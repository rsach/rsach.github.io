import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  filter:string = 'all';

  project:any[] = [	
  {img:'assets/img/portfolio/workout.png',desc:'Hybrid App using MLab Api as database',git:'https://github.com/rsach/workout-app',type:'ionic',title:'Workout App'},
  {img:'assets/img/portfolio/laravel testcase.png',desc:'Laravel Api Testcase',git:'https://github.com/rsach/testcase',type:'laravel', title:'Laravel Api testcase'},
  {img:'assets/img/portfolio/laravel quote.png',desc:'Laravel Quote Web App',git:'https://github.com/rsach/laravel-quote-app',type:'laravel',title:'Quote Web App' },
  {img:'assets/img/portfolio/spotifysearch.png',desc:'Web App using Spotify Api',git:'https://github.com/rsach/spotifysearch',type:'angular',title:'Spotify Search'},
  {img:'assets/img/portfolio/gitSearch.png',desc:'Web App using Github Api',git:'https://github.com/rsach/githubsearch',type:'angular',title:'Github Search'},
  {img:'assets/img/portfolio/mapit.png',desc:'Web App using Google Maps Api',git:'https://github.com/rsach/mapit',type:'angular',title:'Mapit'},
  {img:'assets/img/portfolio/recipe.png',desc:'Web App using FireBase Api as database',git:'https://github.com/rsach/recipe1',type:'angular',title:'Recipe Blog'},

  


  ]

  portfolios:any[];

  ngOnInit() {

  	this.portfolios = this.project;
  }


  filterByChoice(type){
  	if (type==''){
  		this.portfolios = this.project
  	}else{
  	this.portfolios = this.project.filter(portfolio=> portfolio.type===type);

  	}
  }



}
