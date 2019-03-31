import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../services/show.service";
import {Shows} from "../../models/shows";
import {ActivatedRoute} from "@angular/router";
import {Episodes} from "../../models/Episodes";
//import {query} from "@angular/animations";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: Shows[];
  query: string;
  episodeName: string;

  // constructor(private _showService: ShowService,private route: ActivatedRoute) {
  //   this.route.paramMap.subscribe(pm =>
  //     this._showService.getShows(pm.get('query')).subscribe( result=>{
  //       this.shows = [];
  //       result.map((item)=> {
  //         let temp = new Shows(item.show);
  //         console.log(this._showService.getNextPreviousEpisode(temp.previousEpisode));
  //         item.show.nextEpisode = item.show._links.self.href;
  //         //console.table(item.show.nextEpisode);
  //         console.table(item.show._links.self.href);
  //         //console.log(item);
  //         this.shows.push(temp);
  //         this._showService.getNextPreviousEpisode('http://api.tvmaze.com/episodes/1610172')
  //           .subscribe(result1 =>{
  //             this.episodName = result1.name;
  //           })
  //
  //       })
  //     }))




    constructor(private _showService: ShowService,private route: ActivatedRoute) {
      this.route.paramMap.subscribe(pm =>
        this._showService.getShows(pm.get('query')).subscribe(result => {
          this.shows = [];
          result.map((item) => {
            const temp = new Shows(item.show);
            this.shows.push(temp);
          })
          this.getRelatedEpisodes();
        }))
    }





  ngOnInit() {
  }


  getRelatedEpisodes(): void {
      this.shows.map(show => {
        if(show.nextEpisodeUrl) {
          this._showService.getJSONforEpCreation(show.nextEpisodeUrl).subscribe(
            res => show.addNextEpisode(new Episodes(res))
          );
        }

        if(show.previousEpisodeUrl) {

        }
      });
  }
}





