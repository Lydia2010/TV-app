import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Observable} from "rxjs";
import {Shows} from "../models/shows";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  private baseUrl = 'http://api.tvmaze.com/';


  constructor(private http: HttpClient) { }


   getShows(query):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'search/shows?q='+query);

  }

  getSeason(id):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'shows/'+ id+'/seasons');
  }

  getEpisode(id: string): Observable<any[]>{
    return this.http.get<[any]>(this.baseUrl+'seasons/'+id+'/episodes' );

  }

  // getNextPreviousEpisode(url: string): Observable<any>{
  //   console.log("URL INPUT: " + url);
  //   return this.http.get( url);
  // }

  getJSONforEpCreation(passedUrl: string): Observable<any>{
    console.log('Passed Ep URL: ', passedUrl);
    return this.http.get<[any]>(passedUrl);

  }

}

