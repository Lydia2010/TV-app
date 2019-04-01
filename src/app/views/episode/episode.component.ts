// Episode component.
import { Component, Input, OnInit } from '@angular/core';
import {Episodes} from "../../models/Episodes";
import {ShowService} from "../../services/show.service";
import {ActivatedRoute} from "@angular/router";
import {Seasons} from "../../models/seasons";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  @Input() id: string;
  episodes: Episodes[];
  displayedColumns: string[] = ['number', 'name', 'airdate'];

  constructor(private _showService: ShowService) {
  }
  // invoke service to get Episodes and populate episodes array to display in html page of this component
  ngOnInit() {
    this._showService.getEpisode(this.id).subscribe(result => {
      this.episodes = [];
      result.map((item) => {
        const temp = new Episodes(item);
        this.episodes.push(temp);
      });


    })
  }
}
