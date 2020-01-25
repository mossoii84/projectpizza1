import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/internal/Observable";
import {JwtResponse} from "../jwtresponse/JwtResponse";
import {Login} from "../login/login";
import {Reg} from "../registation/reg";

// добавляем в заголовок что отправляем 'application/json'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})

//здесь сервис дляс входа(Login) и регистрации(SignUpInfo)
export class AuthService {
  private loginUrl = 'http://localhost:8080/auth/login';
  private regUrl = 'http://localhost:8080/auth/reg';
  constructor(private http: HttpClient) {}

  postLogin(postLogin: Login): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, postLogin, httpOptions);
  }

  postReg(formRegistration: Reg) {
    return this.http.post(this.regUrl, formRegistration, httpOptions);
  }




}
