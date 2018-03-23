"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var HeaderToolbarComponent = /** @class */ (function () {
    function HeaderToolbarComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        //url = "http://localhost:3000";
        //url = "http://localhost";
        //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
        this.url = "http://myas.com.br";
        this.menus = [false, false, false];
        if (window.location.href.match(/www/) != null) {
            console.log("das me: " + window.location.href);
            this.url = "http://www.myas.com.br";
        }
        else {
            if (window.location.href.match(/local/) != null) {
                this.url = "http://localhost";
            }
            else {
                this.url = "http://myas.com.br";
            }
        }
        if (route.snapshot.url[0].path == 'acompanhamento') {
            this.menus[1] = true;
        }
        else if (route.snapshot.url[0].path == 'historico') {
            this.menus[2] = true;
        }
        else if (route.snapshot.url[0].path == 'cadastro-cliente') {
            this.menus[0] = true;
        }
    }
    HeaderToolbarComponent.prototype.ngOnInit = function () {
    };
    HeaderToolbarComponent.prototype.logout = function () {
        var _this = this;
        var req = this.http.post(this.url + '/api/logout', true)
            .subscribe(function (res) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    HeaderToolbarComponent.prototype.getHeader = function () {
        var req = this.http.get(this.url + '/api/header')
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    //Function to put border on the element, changing style
    HeaderToolbarComponent.prototype.toggle_class = function (id) {
        if (id != this.menuActive) {
            this.menus[id] = true;
            this.menus[this.menuActive] = false;
            this.menuActive = id;
            this.setCookie("menuActive", id, 1);
        }
    };
    HeaderToolbarComponent.prototype.setCookie = function (cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };
    HeaderToolbarComponent.prototype.getCookie = function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    HeaderToolbarComponent.prototype.checkCookie = function () {
        var user = this.getCookie("username");
        if (user != "") {
            alert("Welcome again " + user);
        }
        else {
            user = prompt("Please enter your name:", "");
            if (user != "" && user != null) {
                this.setCookie("username", user, 365);
            }
        }
    };
    HeaderToolbarComponent = __decorate([
        core_1.Component({
            selector: 'app-header-toolbar',
            templateUrl: './header-toolbar.component.html',
            styleUrls: ['./header-toolbar.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, router_1.ActivatedRoute])
    ], HeaderToolbarComponent);
    return HeaderToolbarComponent;
}());
exports.HeaderToolbarComponent = HeaderToolbarComponent;
//# sourceMappingURL=header-toolbar.component.js.map