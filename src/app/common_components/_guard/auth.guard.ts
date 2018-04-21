import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private _location: Location) {
/*      this.response = false;*/
    }

  canActivate() {

        if( this.getCookie("dcJJe4ZEsB") != "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb"){
            return true;
        }
        else{
            this.router.navigate(['/acompanhamento']);
            console.log("going to acomp");
            //this._location.back();
            return false;
        }

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