import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/authService";

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {

  constructor( private authService:AuthService) { }
  FormRegistration;

  ngOnInit() {
    this.FormRegistration = new FormGroup({
      username:new FormControl(),
      password : new FormControl()
    })
  }



  newRegistration(formRegistration){
    console.log(formRegistration.username);
   this.authService.postReg(formRegistration).subscribe(data=>console.log("регистрация прошла успещно"+data));
  }

  // Вариант Олега
  // reg(data) {
  //   const regForm: RegForm = new RegForm(data.username, data.password);
  //   console.log(regForm.username);
  //   this.authService.reg(regForm).subscribe(response => {
  //       console.log('Response received');
  //       this.router.navigate(['login']);
  //       this.infoMessage = response;
  //     },
  //     error => this.infoMessage = error.error.message);
  // }





}
