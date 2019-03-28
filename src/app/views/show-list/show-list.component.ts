import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../services/show.service";
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
    this.shows = [];
    this._showService.getShows().subscribe(results => {
      //this.shows = [];
      console.log('got it');
      //console.log(shows);
      results.map((item)=>{
        const temp = new Shows(item);
        console.log(item);
        this.shows.push(temp);
      })
    });
  }
  ngOnInit() {
    this.getShows()
  }


  // ngOnInit() {
  //   this._showService.getShows()
  //     .subscribe(data => this.shows = data);


}

