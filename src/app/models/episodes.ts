export class Episodes{
  id: number;
  url: string;
  name: string;
  date: Data;





  constructor(args?) {
    console.log(55555);
    if (args) {
      this.id = args.id;
      this.url = args.url;
      this.name = args.name;
      this.data = args.data;


    }
  }
}
