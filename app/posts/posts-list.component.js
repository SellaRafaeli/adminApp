"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
//import { SinglePostComponent } from './single-post.component';
var PostsListComponent = (function () {
    function PostsListComponent(router, http) {
        this.router = router;
        this.http = http;
        this.posts = [];
    }
    PostsListComponent.prototype.getPosts = function () {
        var _this = this;
        this.http.get('/api/posts/all/').toPromise()
            .then(function (res) { return _this.posts = (res.json().posts); });
    };
    PostsListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostsListComponent.prototype.onSelect = function (post) {
        this.selectedPost = post;
    };
    PostsListComponent.prototype.add = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        // this.heroService.create(name)
        //   .then(hero => {
        //     this.heroes.push(hero);
        //     this.selectedHero = null;
        //   });
    };
    PostsListComponent.prototype.delete = function (hero) {
        // this.heroService
        //     .delete(hero._id)
        //     .then(() => {
        //       this.heroes = this.heroes.filter(h => h._id !== hero._id);
        //       if (this.selectedHero === hero) { this.selectedHero = null; }
        //     });
    };
    PostsListComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/posts', this.selectedPost._id]);
    };
    PostsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'posts-list',
            templateUrl: 'posts-list.component.html',
            styleUrls: ['posts-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], PostsListComponent);
    return PostsListComponent;
}());
exports.PostsListComponent = PostsListComponent;
//# sourceMappingURL=posts-list.component.js.map