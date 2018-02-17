import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  //url = "http://localhost:3000";
  url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";


  menus = [false, false, false];
  menuActive;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { 
        if(route.snapshot.url[0].path == 'acompanhamento'){
          this.menus[1] = true;
        }
        else if(route.snapshot.url[0].path == 'historico'){
          this.menus[2] = true;
        }else if(route.snapshot.url[0].path == 'cadastro-cliente'){
          this.menus[0] = true;
        }
      }

      ngOnInit() {
      }

    logout(){
    const req = this.http.post(this.url + '/api/logout', true)
      .subscribe(
        res => {
          this.router.navigate(['/login']);
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

    //Function to put border on the element, changing style
    toggle_class(id: number){
      if (id != this.menuActive) {
        this.menus[id] = true;
        this.menus[this.menuActive] = false;
        this.menuActive = id;
        this.setCookie("menuActive", id, 1);
      }
    }

    setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

    checkCookie() {
      var user = this.getCookie("username");
      if (user != "") {
        alert("Welcome again " + user);
      } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
          this.setCookie("username", user, 365);
        }
      }
    }

  }

