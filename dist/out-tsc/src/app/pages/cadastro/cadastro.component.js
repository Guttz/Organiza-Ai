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
var material_1 = require("@angular/material");
var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(http, router, snackBar) {
        /*          if(window.location.href.match(/www/) !== null){
               window.location.replace(window.location.href.replace(/www\./, ''));
            }  */
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.loadSpinner = false;
        //url = "http://localhost";
        //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
        this.url = "http://www.myas.com.br";
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
    }
    CadastroComponent.prototype.canActivate = function (route, state) {
        if (this.getCookie("dcJJe4ZEsB") == "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb") {
            return true;
        }
        else {
            console.log("log false");
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        }
    };
    CadastroComponent.prototype.signup = function (loginForm) {
        var req = this.http.post(this.url + '/api/signup', loginForm.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    CadastroComponent.prototype.login = function (loginForm) {
        var _this = this;
        this.loadSpinner = true;
        var req = this.http.post(this.url + '/api/login', loginForm.value)
            .subscribe(function (res) {
            console.log("im here" + res);
            _this.router.navigate(['/acompanhamento']);
        }, function (err) {
            _this.loadSpinner = false;
            var config = new material_1.MatSnackBarConfig();
            config.extraClasses = ['error-class'];
            config.duration = 3000;
            _this.snackBar.open("Login e/ou senha incorretos", "Fechar", config);
            console.log("Error occured: " + err.error.message);
        });
    };
    CadastroComponent.prototype.getHeader = function () {
        var req = this.http.get(this.url + '/api/header')
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    CadastroComponent.prototype.getCookie = function (cname) {
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
    CadastroComponent = __decorate([
        core_1.Component({
            selector: 'my-cadastro',
            templateUrl: './cadastro.component.html',
            styleUrls: ['./cadastro.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router, material_1.MatSnackBar])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map