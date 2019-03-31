export class Episodes{
  id: number;
  number: number;
  url: string;
  name: string;
  aired: string;





  constructor(args?) {
    if (args) {
      this.id = args.id;
      console.log("id episod " + args.id);
      this.number = args.number;
      this.url = args.url;
      this.name = args.name;
      this.aired = args.airdate;


    }
  }
}
