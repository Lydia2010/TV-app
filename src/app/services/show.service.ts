import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IShowItem} from "../models/show1";
import{Observable} from "rxjs";
import {Shows} from "../models/shows";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  //private shows_url: string = 'http://api.tvmaze.com/search/shows?q=';
  //private seasons_url: string = 'http://api.tvmaze.com/shows/';
  //private episodes_url: string = 'http://api.tvmaze.com/seasons/';
  private baseUrl = 'http://api.tvmaze.com/';


  constructor(private http: HttpClient) { }

  // getShows():Observable<IShowItem[]>{
  //   return this.http.get<IShowItem[]>(this.shows_url).pipe(

   getShows(query):Observable<any[]>{
     //console.log(this.shows_url);
    return this.http.get<any[]>(this.baseUrl+'search/shows?q='+query);

  }
  getSeason(id):Observable<any[]>{
    //console.log(this.seasons_url+id+'/seasons');
    return this.http.get<any[]>(this.baseUrl+'shows/'+ id+'/seasons');
  }

  getEpisode(id: string): Observable<any[]>{
    //console.log(this.episodes_url+id+'/episodes');
    return this.http.get<[any]>(this.baseUrl+'seasons/'+id+'/episodes' );

  }

  getNextPreviousEpisode(url: string): Observable<any>{
    console.log("URL INPUT: " + url);
    return this.http.get( url);
  }


}

