import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';
import { GlobalService } from '../../../GlobalService'

@Component({
  selector: 'app-dashboard-login',
  template: `
  <h2>Username</h2>
  <input #username type="text" class="form-control" style="width:50%" required>
  <h2>Password</h2>
  <input #password type="password" class="form-control" style="width:50%" required>
  <br>
  <button (click)="func(username.value, password.value)" class="btn btn-hero-success">Login</button>
  `
})

export class LoginComponent {

  constructor(
    private http:HttpClient,
    private _cookieService:CookieService,
    private service:GlobalService)
  {}

  func(username: String, password: String){
    var user = {
      username: username,
      password: password
    };

    const options = {
      withCredentials: true
    };

    this.http.post('http://localhost:3000/api/login',user, options).subscribe(res =>{
      this.service.currentUser = String(res["user"]);
      window.location.href = 'http://localhost:4200/#/';
    });
  }
}
