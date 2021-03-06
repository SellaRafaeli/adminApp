import { Component } from '@angular/core';
import { Hero } from './users/hero';
import { HeroesComponent } from './users/heroes.component';
import { HeroDetailComponent } from './users/hero-detail.component';
import { HeroService } from './users/hero.service';

@Component({
  moduleId: module.id,
  providers: [HeroService],
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes"    routerLinkActive="active">Heroes</a>
      <a routerLink="/posts"     routerLinkActive="active">Posts</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'My App1003'
}