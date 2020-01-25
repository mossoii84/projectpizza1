import {Cart} from "../cart/cart";

export class Orders{

   id:number;
   client:any;
  cartList:Cart;


  constructor(id: number, client: any, cartList: Cart) {
    this.id = id;
    this.client = client;
    this.cartList = cartList;
  }
}
