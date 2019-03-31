import {Seasons} from "./seasons";
import {Episodes} from "./Episodes";
import {ShowService} from "../services/show.service";

export class Shows {
  // attribute
  id: number;
  name: string;
  status: string;
  premiered: Date;
  image: { medium: string };
  summary: string;
  seasons: Seasons[];
  nextEpisodeUrl: string;
  previousEpisodeUrl: string;
  nextEpisode: Episodes;
  previousEpisode: Episodes;
  srv: ShowService;


  constructor (args?) {

    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.status = args.status;
      this.premiered = args.premiered;
      this.image = args.image;
      this.summary = args.summary;
      this.seasons = args.seasons;
      this.previousEpisodeUrl = (args._links.previousepisode) ? args._links.previousepisode.href : null;

    }
  }

  addSeason(season: Seasons) {
    if (!this.seasons) {
      this.seasons = [];
    }
    this.seasons.push(season);
  }

  addPrevEpisode(ep: Episodes) {
    this.previousEpisode = ep;
  }

}
