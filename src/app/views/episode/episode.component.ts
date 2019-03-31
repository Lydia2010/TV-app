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
  displayedColumns: string[] = ['number', 'name', 'aired'];

  // constructor(private _showService: ShowService, private route: ActivatedRoute) {
  //   //   console.log("Episodes are here: " + this.id);
  //   //   this.route.paramMap.subscribe(pm =>
  //   //     this._showService.getEpisode(pm.get('id')).subscribe(result => {
  //   //       this.episodes = [];
  //   //       console.log(pm.get('id') + ' MY SEASON ID');
  //   //       result.map((item) => {
  //   //         const temp = new Episodes(item);
  //   //         this.episodes.push(temp);
  //   //       })
  //   //     }))
  //   // }

  constructor(private _showService: ShowService) {
  }

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
