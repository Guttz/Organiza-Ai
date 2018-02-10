import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient,  private router: Router) { 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if( this.getCookie("dcJJe4ZEsB") == "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb"){
            return true;
        }
        else{
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        }
    }


  signup(loginForm:NgForm){
    const req = this.http.post('http://localhost:3000/signup', loginForm.value)
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
  	const req = this.http.post('http://localhost:3000/log', loginForm.value)
      .subscribe(
        res => {
          this.router.navigate(['/acompanhamento']);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
    );

  }

  teste(){
          const req = this.http.get('http://localhost:3000/log')
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured: " + err.error.message);
        }
    );

  }

    getHeader(){
          const req = this.http.get('http://localhost:3000/header')
      .subscribe(
        res => {
          console.log(res);
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
