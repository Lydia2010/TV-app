export class Episodes{
  id: number;
  number: number;
  url: string;
  name: string;
  airdate: string;





  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.number = args.number;
      this.url = args.url;
      this.name = args.name;
      this.airdate = args.airdate;
      // console.log("id episode " + args.id);

    }
  }
}
