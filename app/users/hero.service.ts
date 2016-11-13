import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  
  private heroesUrl = '/api/users/';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    // .then(response => response.json().data as Hero[])
    return this.http.get(this.heroesUrl)
               .toPromise()               
               .then(function(response){
                 // debugger
                 return response.json().data as Hero[]
               }) 
               .catch(this.handleError);
  }

  getHero(_id: string): Promise<Hero> {
    return this.http.get('/api/users/id/'+_id)
               .toPromise()               
               .then(function(response){
                 return response.json() as Hero
               }) 
               .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    //.put(url, JSON.stringify(hero), {headers: this.headers})
    let url = `/api/users/updateOne?_id=${hero._id}&name=${hero.name}`;
    return this.http
      .get(url,{headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    //.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    return this.http
      .get('/api/users/addOne?name='+name, {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(_id: number): Promise<void> {
    //this.http.delete(url, {headers: this.headers})
    //const url = `${this.heroesUrl}/${id}`;
    debugger
    var url = '/api/users/delete/'+_id;
    return this.http.get(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}