import {Seasons} from "./seasons";

export class Shows {
  // attribute
  id: number;
  name: string;
  status: string;
  premiered: Date;
  image: string;
  summary: string;
  seasons: Seasons[];


  constructor(args?) {

    if (args) {
      this.id = args.id;
      this.name = args.name;
      this.status = args.status;
      this.premiered = args.premiered;
      this.image = args.image;
      this.summary = args.summary;
      this.seasons = args.seasons;
    }
  }
  addSeason(season: Seasons) {
    if (!this.seasons) {
      this.seasons = [];
    }
    this.seasons.push(season);
  }
}
