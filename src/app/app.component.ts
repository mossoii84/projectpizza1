import { Component } from '@angular/core';
import {Tokenstorageservice} from "./service/tokenstorageservice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: any;

  constructor(private token: Tokenstorageservice) {}



    //вызвали это здесь для *ngIf="isAuthenticated()" для  canActivate: [AuthGuard] чтобы он видел это в своем компаненте
  isAuthenticated() {
    return Tokenstorageservice.isAuthorities();
  }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }







}
