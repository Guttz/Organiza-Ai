import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements CanActivate {

	//Username and password variables
	private user: String;
	private pass: String;

  //url = "http://localhost:3000";
  url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:3000";

  constructor(private http: HttpClient,  private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if( this.getCookie("dcJJe4ZEsB") == "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb"){
            console.log("conso tre");
            return true;

        }
        else{
            console.log("log false");
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        }
    }


  signup(loginForm:NgForm){
    const req = this.http.post(this.url + '/api/signup', loginForm.value)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
    );

  }

  login(loginForm:NgForm){
  	const req = this.http.post(this.url + '/api/login', loginForm.value)
      .subscribe(
        res => {
          console.log("im here" + res);
          this.router.navigate(['/acompanhamento']);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
    );

  }

    getHeader(){
          const req = this.http.get(this.url + '/api/header')
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
      );

    }

      getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

}
