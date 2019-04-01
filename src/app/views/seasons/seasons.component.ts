// seasons component. Component active after click on Details button of the show
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
  // invoke service to get seasons and populate seasons array to display in html page of this component
  constructor(private _showService: ShowService, private route: ActivatedRoute) {
     this.route.paramMap.subscribe(pm =>
       this._showService.getSeason(pm.get('id')).subscribe(result => {
        this.seasons = [];
        result.map((item) => {
          const temp = new Seasons(item);
          this.seasons.push(temp);

         })
      }))


  }


    ngOnInit() {

    }

  }


