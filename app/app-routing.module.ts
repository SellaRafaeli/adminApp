import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './users/heroes.component';
import { HeroDetailComponent }  from './users/hero-detail.component';

import { PostsListComponent }  from './posts/posts-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',   component: DashboardComponent },
  { path: 'users/:_id',  component: HeroDetailComponent },
  { path: 'heroes',      component: HeroesComponent },
  { path: 'posts',       component: PostsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}