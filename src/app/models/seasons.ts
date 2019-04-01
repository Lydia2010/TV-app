export class Seasons{
  id: number;
  url: string;
  name: string;
  summary: string;
  episodeOrder: number;
  number: number;
  episode: number;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.url = args.url;
      this.name = args.name;
      this.episodeOrder = args.episodeOrder;
      this.number = args.number;
      this.summary = args.summary;
      this.episode = args.episode;

    }
  }
}
