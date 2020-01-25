import { Component, OnInit } from '@angular/core';
import {ServicePizza} from "./servicepizza";
import {Pizza} from "./pizza";




@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  constructor( private servicePizza:ServicePizza) { }
   ListPizza:Pizza[]=[];
  pizzaListInOrder;
   ngOnInit() {
    this.servicePizza.getAllPizza().subscribe((data:Pizza[])=>this.ListPizza=data);
  }



  //отправляем пиццу в Cart(корзину) через Get
  addPizzaInCart(id:number){
     this.servicePizza.postPizzaInCart(id).subscribe((data)=>this.pizzaListInOrder=data);
  }



















  //отправляем в корзину через Git
  // addPizzaInOrder(id:number){
  //    this.servicepizza.getPizzaInOrder(id).subscribe((data)=>this.ListOrder=data);
  // }

  }
