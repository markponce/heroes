import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',

  template: `
	<h1>{{title}}</h1>
	<h2>My Heroes</h2>
	<ul class="heroes">
		<li *ngFor="let hero of heroes"  (click)="onSelect(hero)">
			<span class="badge" >{{hero.id}}</span> {{hero.name}}
		</li>
	</ul>
	<hero-detail [hero]="selectedHero"></hero-detail>
  `,



  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	title = 'Tour of Heroes';
	selectedHero: Hero;
	heroes: Hero[];

	constructor(private heroService: HeroService) { }

	ngOnInit() : void {
  		this.getHeroes();
  	}
	

	onSelect(hero: Hero): void {
		  this.selectedHero = hero;
		  // console.log(this.selectedHero);

		}

	getHeroes() : void  {
		// this.heroes = this.heroService.getHeroes();
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
		
	}







}
