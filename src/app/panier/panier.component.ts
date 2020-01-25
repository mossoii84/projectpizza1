import { Component, OnInit } from '@angular/core';
import {Serivcepanier} from "./serivcepanier";
import {ServicePizza} from "../pizza/servicepizza";
import {HttpClient} from "@angular/common/http";
import {Panier} from "./panier";




@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  cartInBD:any[]=[];
 // cart:any[]=[];
  cart:{}={};
  panier:Panier[]=[];
  private urlPanier="http://localhost:8080/panier/";
  constructor( private servicepanier:Serivcepanier, private  servicepizza:ServicePizza,private http:HttpClient){}
  ngOnInit() {
    this.cart = JSON.parse(window.localStorage.getItem('cartList'));
  }


 // рабочий вариант
  inBD(cartPizza){
    const bod = {pizzas: this.cart};
    console.log(cartPizza);
    return this.servicepanier.postInPanier(bod).subscribe((result)=>this.cartInBD);
    console.log("Карт в ИД-"+this.cartInBD);
  }





}

// inBD(data) {
//   console.log(data);
//   const panier = new Panier(data.id, data.massiv,data.pizzas);
//   this.servicepanier.addPizza(panier).subscribe(response =>this.cartInBD);
//   console.log("Карт в ИД-"+this.cartInBD);
// }




// export class CartQuery extends QueryEntity<CartState, Pizza> {
//   constructor(protected store: CartStore) {
//     super(store);
//   }
//
//   addProductToCart(productId: Product['id']) {
//     const findItem = this.cartQuery.getEntity(productId);
//
// CartState
// @StoreConfig({
//   name: 'cart',
//   idKey: 'productId'
// })
