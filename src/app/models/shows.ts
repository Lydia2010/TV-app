export class Shows {
  // attribute
  id: number;
  name: string;
  status: string;
  premiered: Date;
  //image: Image;
  summary: string;


  constructor(args?) {

    if (args) {

      console.log(args.id);
      this.id = args.id;
      this.name = args.name;
      this.status = args.status;
      this.premiered = args.premiered;

      //this.image = args.image;
      this.summary = args.summary;
    }
  }
}
