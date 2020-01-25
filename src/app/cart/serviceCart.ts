import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

import {Cart} from "./cart";

@Injectable({
  providedIn:'root'})
export class ServiceCart{

  private url="http://localhost:8080/api/cart/ListCart";
  private urlDelete="http://localhost:8080/api/cart/deleteCart/"
  private urlPost="http://localhost:8080/api/cart/creeOrder"
  constructor(private http:HttpClient){}

  getAllCartList():Observable<Cart[]>{
    return this.http.get<Cart[]>(this.url);
  }

 deletePizza(id:number){
     return this.http.delete(this.urlDelete+id)
  }


  commanderPizzaCart(cart){
    return this.http.post(this.urlPost,cart);
  }




}
