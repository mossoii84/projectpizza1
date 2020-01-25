import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Panier} from "./panier";

@Injectable({
  providedIn:'root'})
export class Serivcepanier {

  private urlPanier="http://localhost:8080/api/order/orderby";
  constructor(private http:HttpClient){}

  getAllPanier():Observable<Panier[]>{
    return this.http.get<Panier[]>(this.urlPanier);
  }

  postInPanier(cartPizza){
    return this.http.post(this.urlPanier,cartPizza);
  }


  addPizza(cartPizza:Panier) {
    const formData: FormData = new FormData();
    formData.append('namepizza', cartPizza.massiv);
    return this.http.post(this.urlPanier, formData);
  }



}
