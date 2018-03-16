import { Component, OnInit, Input } from '@angular/core';
//ActivatedRoute holds information about the route instance
//This is where we can extract the id parameter from the navbar
import { ActivatedRoute } from '@angular/router'
//Interacts with the browser this is like history in react-router
//This is what you use to push to a different route to navigate to
import { Location } from '@angular/common'

import { Hero } from '../hero'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  @Input() hero: Hero

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero)
  }
  goBack(): void {
    this.location.back()
  }
  ngOnInit() {
    this.getHero()
  }

}
