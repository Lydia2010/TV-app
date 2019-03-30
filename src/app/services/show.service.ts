import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IShowItem} from "../models/show1";
import{Observable} from "rxjs";
import {Shows} from "../models/shows";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private shows_url: string = 'http://api.tvmaze.com/search/shows?q=';
  //private season_url: string = 'http://api.tvmaze.com/shows/:id/seasons';
  private seasons_url: string = 'http://api.tvmaze.com/shows/';

  constructor(private http: HttpClient) { }

  // getShows():Observable<IShowItem[]>{
  //   return this.http.get<IShowItem[]>(this.shows_url).pipe(

   getShows(query):Observable<any[]>{
     console.log(this.shows_url);
    return this.http.get<any[]>(this.shows_url+query);

  }
  getSeason(id):Observable<any[]>{
    console.log(this.seasons_url+id+'/seasons');
    return this.http.get<any[]>(this.seasons_url+id+'/seasons');

  }
}

