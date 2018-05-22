import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MessagesService } from './messages.service'

import { Hero } from './hero'

@Injectable()
export class HeroService {
  constructor(
    private messageService: MessagesService,
    private http: HttpClient
  ) { }

  private heroesURL = 'api/heroes'

  private log(message: string): void {
    this.messageService.add("HeroService: " + message)
  }

  getHeroes(): Observable<Hero[]> {
    this.log('Fetched All Heroes')
    return this.http.get<Hero[]>(this.heroesURL)
  }

  getHero(id: number): Observable<Hero> {
    this.log(`Fetched Hero ${id}`)
    return this.http.get<Hero>(this.heroesURL + '/' + id)
  }
}
