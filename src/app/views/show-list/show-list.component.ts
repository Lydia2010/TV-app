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

  // invoke service to get shows using parameter in search field and populate
  // shows array to display in html page of this component
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

// invoke service to get Previous Episode name and Next Episode name, using URL from Shows service
// from field previousEpisode and nextEpisode accordingly.

  getRelatedEpisodes(): void {
      // get previous episode  name
      this.shows.map(show => {
        if(show.nextEpisodeUrl) {
          this._showService.getJSONforEpCreation(show.nextEpisodeUrl).subscribe(
            res => show.addNextEpisode(new Episodes(res))
          );
        }
          // get next episode  name
        if(show.previousEpisodeUrl){
          this.shows.map( show => {
            if(show.previousEpisodeUrl) {
             this._showService.getJSONforEpCreation(show.previousEpisodeUrl).subscribe(
                res1 => show.addPrevEpisode(new Episodes(res1))
             );
            }
          }
          )


        }
      }
      );
  }
}





