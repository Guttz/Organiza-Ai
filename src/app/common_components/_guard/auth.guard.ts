import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthGuard implements CanActivate {
    private response: any;
    test: boolean;

    constructor(private http: HttpClient, private router: Router) {
/*      this.response = false;*/
    }

    login(){
    //Sending true parameters for no reason, just so post is used
    const req = this.http.get('http://localhost:3000/log')
          .subscribe(
            res => {
              this.response = true;
              this.test = true;
              console.log(res);
              console.log("ENTREI NO LOGIN");
            },
            err => {
              console.log("Error occured: " + err.error.message);
            }
        );
    }

    logout(){
       this.response = false;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("this response " + this.response);
        console.log("this test " + this.test);
        if (this.response == true) {
            // logged in so return true
            return true;
        }
        else{
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/historico']);
            return false;
        }
    }
}