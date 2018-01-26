import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {

	menus = [false, false, false];
	menuActive;


  constructor() { 
        this.menuActive = this.getCookie("menuActive");
        this.menus[this.menuActive] = true;
        //console.log(route._routerState.snapshot.url);
      }

      ngOnInit() {
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

