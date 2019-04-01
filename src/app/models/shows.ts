import {Seasons} from "./seasons";
import {Episodes} from "./Episodes";


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
      this.nextEpisodeUrl = (args._links.nextepisode) ? args._links.nextepisode.href : null;

    }
  }
  //to set previous episode
  addPrevEpisode(ep: Episodes) {
    this.previousEpisode = ep;
  }
  //to set next episode
  addNextEpisode(nextEp: Episodes){
    this.nextEpisode = nextEp;
  }
}
