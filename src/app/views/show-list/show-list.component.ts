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
            let prev_url = temp.previousEpisodeUrl;
            console.log(prev_url);
            let jsonReceived = this._showService.getJSONforEpCreation(prev_url).subscribe(result1 => {
              console.log(result1.name);
              let epObj = new Episodes(result1);
              console.table({epObj});
              temp.addPrevEpisode(epObj);
              console.table('Prev ep name from show.ep.name: ', temp.previousEpisode.name);
            });




            this.shows.push(temp);
          })
        }))
    }





  ngOnInit() {
  }

}





