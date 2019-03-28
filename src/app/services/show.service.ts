import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IShowItem} from "../models/show";
import{Observable} from "rxjs";
import {Shows} from "../models/shows";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private shows_url: string = 'http://api.tvmaze.com/search/shows?q=girl';

  constructor(private http: HttpClient) { }

  // getShows():Observable<IShowItem[]>{
  //   return this.http.get<IShowItem[]>(this.shows_url).pipe(
   getShows():Observable<any[]>{
    return this.http.get<any[]>(this.shows_url);

  }
}
