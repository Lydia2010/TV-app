import { Component, OnInit } from '@angular/core';
import {Shows} from "../../models/shows";
import {ShowService} from "../../services/show.service";
import {ActivatedRoute} from "@angular/router";
import {Seasons} from "../../models/seasons";

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.sass']
})
export class SeasonsComponent implements OnInit {

  seasons: Seasons[];

  constructor(private _showService: ShowService, private route: ActivatedRoute) {
    console.log (99999);
     this.route.paramMap.subscribe(pm =>
       this._showService.getSeason(pm.get('id')).subscribe(result => {
        this.seasons = [];
        //console.log(pm.get('id') + ' MY SHOW ID');
        result.map((item) => {
          const temp = new Seasons(item);
          this.seasons.push(temp);

         })
      }))

      //   this.shows = [];
      //   this._showService.getShows(this.route.snapshot.params.query).subscribe(results => {
      //     //this.shows = [];
      //     console.log('got it');
  }
  getSeason(): void {
    console.log('got it');

  }

    ngOnInit() {
      console.log (9999900000000);
    }

  }


