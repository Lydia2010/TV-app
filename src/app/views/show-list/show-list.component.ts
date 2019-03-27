import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../servises/show.service";
import {Shows} from "../../models/shows";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.sass']
})
export class ShowListComponent implements OnInit {
  //public shows = [];
  shows: Shows[];

  constructor(private _showService: ShowService) { }

  getShows(): void {
    this._showService.getShows().subscribe(shows => {
      console.log('got it');
      console.log(shows);
    });
  }
  ngOnInit() {
    this.getShows()
  }


  // ngOnInit() {
  //   this._showService.getShows()
  //     .subscribe(data => this.shows = data);


}

