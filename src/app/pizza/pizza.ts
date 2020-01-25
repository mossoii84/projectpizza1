

export class Pizza {
  id:number;
  name:string;
  size:string;
  price:number;
  file: File;


  constructor(id: number, name: string, size: string, price: number, file: File) {
    this.id = id;
    this.name = name;
    this.size = size;
    this.price = price;
    this.file = file;
  }
}
