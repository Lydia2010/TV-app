//Services to retrieve data from backend
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

// invoke service to get shows
   getShows(query):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'search/shows?q='+query);

  }
// invoke service to get seasons
  getSeason(id):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+'shows/'+ id+'/seasons');
  }
// invoke service to get episode
  getEpisode(id: string): Observable<any[]>{
    return this.http.get<[any]>(this.baseUrl+'seasons/'+id+'/episodes' );

  }

// invoke service to get last and next episodes
  getJSONforEpCreation(passedUrl: string): Observable<any>{
    console.log('Passed Ep URL: ', passedUrl);
    return this.http.get<[any]>(passedUrl);

  }

}

