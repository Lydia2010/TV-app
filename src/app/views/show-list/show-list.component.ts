import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../services/show.service";
import {Shows} from "../../models/shows";
import {ActivatedRoute} from "@angular/router";
//import {query} from "@angular/animations";

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  shows: Shows[];
  query: string;


  constructor(private _showService: ShowService,private route: ActivatedRoute) {
    this.route.paramMap.subscribe(pm =>
      this._showService.getShows(pm.get('query')).subscribe( result=>{
      this.shows = [];
      result.map((item)=> {
        const temp = new Shows(item.show);
        //console.log(temp);
        this.shows.push(temp);
      })
    }))

    //this.query = this.route.snapshot.paramMap.get('query');

    //console.log(this.route.paramMap.get('query'));
    //console.log(this.route.snapshot.params.query);
  }

  // getShows(): void {
  //   this.shows = [];
  //   this._showService.getShows(this.route.snapshot.params.query).subscribe(results => {
  //     //this.shows = [];
  //     console.log('got it');
  //     //console.log(shows);
  //     results.map((item)=>{
  //       const temp = new Shows(item.show);
  //       console.log(temp);
  //       this.shows.push(temp);
  //     })
  //   });

  ngOnInit() {
  }

}
  // ngOnInit() {
  //   this._showService.getShows()
  //     .subscribe(data => this.shows = data);




