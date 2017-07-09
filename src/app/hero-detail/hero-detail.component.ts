import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './../hero';
// import { Component, Input } from '@angular/core';


@Component({
  selector: 'hero-detail',
  // templateUrl: './hero-detail.component.html',

    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styleUrls: ['./hero-detail.component.css'],

})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
