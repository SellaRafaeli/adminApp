import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../users/hero';
import { HeroService } from '../users/hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/users', hero._id];
    this.router.navigate(link);
  }

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
}

