import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceOrder} from "./serviceorder";
import {MatSort, MatTableDataSource} from "@angular/material";
import {ServiceCart} from "../cart/serviceCart";



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  getAllOrder;
  getCart;
  constructor(private serviceorder:ServiceOrder, private serviceCart:ServiceCart) { }

  ngOnInit() {
    this.serviceorder.getAllOrder().subscribe( result =>this.getAllOrder=result);
    this.serviceCart.getAllCartList().subscribe(resCart=>this.getCart=resCart);
  }




}
