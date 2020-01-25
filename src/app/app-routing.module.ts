import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistationComponent} from "./registation/registation.component";
import {PizzaComponent} from "./pizza/pizza.component";
import {AuthGuard} from "./service/authguard";
import {OrderComponent} from "./order/order.component";
import {CartComponent} from "./cart/cart.component";
import {AccountComponent} from "./account/account.component";




const routes: Routes = [
  { path: '', redirectTo:'',pathMatch: 'full',component: PizzaComponent},
  { path: 'cart', component: CartComponent,canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'reg', component: RegistationComponent },
  { path: 'account', component: AccountComponent }
  //canActivate:[AufGuards] - если пользователь не зарегин не дават ему доступ сюда, [AufGuards] -это имя класса
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



