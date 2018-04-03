import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements CanActivate {

	//Username and password variables
	public user: String;
	public pass: String;
  loadSpinner = false;

  //url = "http://localhost";
  //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
  url = "http://www.myas.com.br"
  constructor(private http: HttpClient,  private router: Router, public snackBar: MatSnackBar) { 
      
/*          if(window.location.href.match(/www/) !== null){
       window.location.replace(window.location.href.replace(/www\./, ''));
    }  */

    if(window.location.href.match(/www/) != null){
      console.log("das me: " + window.location.href);
         this.url = "http://www.myas.com.br";
       }
      else{
        if(window.location.href.match(/local/) != null){
           this.url = "http://localhost";
         }
         else{
           this.url = "http://myas.com.br";
         }
         
       }
  }
    
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if( this.getCookie("dcJJe4ZEsB") == "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb"){
            console.log("auth acompanhamento");
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
    this.loadSpinner = true;
  	const req = this.http.post(this.url + '/api/login', loginForm.value)
      .subscribe(
        res => {
          console.log("im here" + res);
          this.router.navigate(['/acompanhamento']);
        },
        err => {
         this.loadSpinner = false; 
                    let config = new MatSnackBarConfig();
      config.extraClasses = ['error-class'];
      config.duration = 3000;
      this.snackBar.open("Login e/ou senha incorretos", "Fechar", config);
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
