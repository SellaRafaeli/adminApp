import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';

//import { SinglePostComponent } from './single-post.component';

@Component({  
  moduleId: module.id,
  selector: 'posts-list',
  templateUrl: 'posts-list.component.html',
  styleUrls: ['posts-list.component.css']
})

export class PostsListComponent implements OnInit {
  posts = [];
  selectedPost;

  constructor(private router: Router, private http: Http) { 

  }

  getPosts(): void {
    this.http.get('/api/posts/all/').toPromise()
             .then((res) => this.posts = (res.json().posts));    
  }

  ngOnInit(): void {
    this.getPosts();
  }

  onSelect(post): void {
    this.selectedPost = post;
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    // this.heroService.create(name)
    //   .then(hero => {
    //     this.heroes.push(hero);
    //     this.selectedHero = null;
    //   });
  }

  delete(hero): void {
    // this.heroService
    //     .delete(hero._id)
    //     .then(() => {
    //       this.heroes = this.heroes.filter(h => h._id !== hero._id);
    //       if (this.selectedHero === hero) { this.selectedHero = null; }
    //     });
  }

  gotoDetail(): void {
    this.router.navigate(['/posts', this.selectedPost._id]);
  }
}