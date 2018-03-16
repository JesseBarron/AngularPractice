import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of'
import { Observable } from 'rxjs/Observable'

import { MessagesService } from './messages.service'

import { Hero } from './hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES)
  }
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: Fetched Hero ${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }
}
