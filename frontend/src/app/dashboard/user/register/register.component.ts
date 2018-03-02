import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/core';
import { GlobalService } from '../../../GlobalService'

@Component({
  selector: 'app-dashboard-register',
  template: `
  <h2>Username</h2>
  <input #username type="text" class="form-control" style="width:50%" required>
  <h2>Password</h2>
  <input #password type="password" class="form-control" style="width:50%" required>
  <br>
  <button (click)="func(username.value, password.value)" class="btn btn-hero-success">Register</button>
  `
})

export class RegisterComponent {

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
    this.http.post('http://localhost:3000/api/register',user).subscribe(res =>{
    if(res['name']=='UserExistsError'){
      console.log('failed');
      window.alert('The Username already exists, please choose a different username')
    }
    else{
      console.log('registered');
      window.location.href = 'http://localhost:4200/#/';}
    });
  }
}
