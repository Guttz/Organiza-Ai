"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var socketIo = require("socket.io-client");
var PORT = 81;
var SocketComunicator = /** @class */ (function () {
    function SocketComunicator() {
        this.url = "http://myas.com.br";
    }
    SocketComunicator.prototype.initSocket = function () {
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
        this.socket = socketIo(this.url + ":" + PORT);
    };
    SocketComunicator.prototype.sendChanges = function (message) {
        this.socket.emit('message', message);
    };
    SocketComunicator.prototype.getChanges = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on('message', function (data) { return observer.next(data); });
        });
    };
    SocketComunicator.prototype.onEvent = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.socket.on(event, function () { return observer.next(); });
        });
    };
    SocketComunicator = __decorate([
        core_1.Injectable()
    ], SocketComunicator);
    return SocketComunicator;
}());
exports.SocketComunicator = SocketComunicator;
//# sourceMappingURL=socketComunicator.service.js.map