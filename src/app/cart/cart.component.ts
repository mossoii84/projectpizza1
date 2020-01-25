import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceCart} from "./serviceCart";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  AllCartList;
  Del;
  //кол-во пицц+-
  count:number=1;
  increase():void{
    this.count++;}
  decrease():void{
    this.count--;}


  constructor(private serviceCart:ServiceCart,private router: Router) { }
  ngOnInit() {
    this.serviceCart.getAllCartList().subscribe(res=>{this.AllCartList=res})
  }

   deletePizzaInCart(id:number){
    this.serviceCart.deletePizza(id).subscribe(resDel=>this.Del=resDel);
   }

  commanderPizzaInCart(cart){
    this.serviceCart.commanderPizzaCart(cart).subscribe(data=>console.log(data));
    this.router.navigate(['/order'])
  }


}
