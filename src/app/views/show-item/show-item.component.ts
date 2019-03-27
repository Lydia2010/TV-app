import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../servises/show.service";

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.sass']
})
export class ShowItemComponent implements OnInit {
  public shows= [];
  constructor(private _showService: ShowService) { }

  ngOnInit() {
    this._showService.getShows()
      .subscribe(data => this.shows = data);
  }

}
