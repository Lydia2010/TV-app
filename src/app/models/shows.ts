import {Seasons} from "./seasons";

export class Shows {
  // attribute
  id: number;
  name: string;
  status: string;
  premiered: Date;
  image: { medium: string };
  summary: string;
  seasons: Seasons[];
  nextEpisode: string;
  previousEpisode: string;
  links: any;



  constructor(args?) {

    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.status = args.status;
      this.premiered = args.premiered;
      this.image = args.image;
      this.summary = args.summary;
      this.seasons = args.seasons;
      this.nextEpisode = args.nextEpisode;
      this.previousEpisode = args.previousEpisode;
      this.links = args._links;
    }
  }
  addSeason(season: Seasons) {
    if (!this.seasons) {
      this.seasons = [];
    }
    this.seasons.push(season);
  }
}
