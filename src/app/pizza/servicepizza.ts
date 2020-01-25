import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Pizza} from "./pizza";



@Injectable({
providedIn:'root'})
export class ServicePizza{

  private url="http://localhost:8080/api/pizza/pizzaInCart";
  private urlAddPizzaInCart="http://localhost:8080/api/pizza/addPizzaInCart/";
  constructor(private http:HttpClient){}


  getAllPizza():Observable<Pizza[]>{
    return this.http.get<Pizza[]>(this.url);
  }

  //отправляем в корзину через Git
  postPizzaInCart(AllListPizza){
    return this.http.get(this.urlAddPizzaInCart + AllListPizza.id);
  }



  // savePostPizza(AllListPizza){
  //   return this.http.post(this.urlPostPizzaInOrder,AllListPizza);}


  // putPizza(MyPostOfficeForm){
  //   return this.http.put(this.url+MyPostOfficeForm.id,MyPostOfficeForm)
  // }
  //
  // deletePizzaInPizza(id:number){
  //   return this.http.delete(this.url+id);
  // }

}
