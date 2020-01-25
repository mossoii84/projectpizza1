import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./jwtresponse/Interceptor/interceptorSession";
import { RegistationComponent } from './registation/registation.component';
import {
  MatButtonModule, MatCheckboxModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule, MatSidenavModule, MatSortModule,
  MatTableModule, MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PizzaComponent } from './pizza/pizza.component';
import { PanierComponent } from './panier/panier.component';
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import {MatCardModule} from '@angular/material/card';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistationComponent,
    PizzaComponent,
    PanierComponent,
    UploadfileComponent,
    OrderComponent,
    CartComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    MatTableModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatButtonModule,MatInputModule,MatIconModule,
    MatSortModule,BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
