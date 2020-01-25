import {Pizza} from "../pizza/pizza";
import {Orders} from "../order/orders";

export class Cart{
  id:number;
  orders:Orders;
  pizzaList:Pizza;

  constructor(id: number, orders: Orders, pizzaList: Pizza) {
    this.id = id;
    this.orders = orders;
    this.pizzaList = pizzaList;
  }
}
