export class Details{
  id: number;
  url: string;
  name: string;
  summary: string;
  episodeOrder: number;
  //premiereDate: Data;
  //season: Season[];



constructor(args?) {
  this.id = args.id;
  this.url = args.url;
  this.name = args.name;
  this.episodeOrder = args.episodeOrder;
  //this.premiereDate = args.premiereDate;
  this.summary = args.summary;
  //this.season = args.season;
}
}
