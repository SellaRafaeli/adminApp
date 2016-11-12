import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({  
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) { 

  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    console.log('getting heroes');

    var hrc = this;
    window.bla = hrc;
    this.heroService.getHeroes().then(function(heroes) {
      console.log(heroes); return (hrc.heroes = heroes)});
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}