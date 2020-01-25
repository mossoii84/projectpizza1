import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Orders} from "./orders";
import {Cart} from "../cart/cart";


@Injectable({
  providedIn:'root'})
export class ServiceOrder {
  private urlGetAllOrders="http://localhost:8080/api/order/allOrder";

  constructor(private http:HttpClient){}


   getAllOrder():Observable<Orders[]>{
     return this.http.get<Orders[]>(this.urlGetAllOrders);
 }







}
