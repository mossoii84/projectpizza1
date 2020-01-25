
export class Panier{
  constructor(
    public id:number,
     public massiv:string,
     public pizzas:Panier
  ){}
}
