"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var express = require("express");
var socketIo = require("socket.io");
var socketServer = /** @class */ (function () {
    function socketServer() {
        this.createApp();
        this.config();
        this.createServer();
        this.sockets();
        this.listen();
    }
    socketServer.prototype.createApp = function () {
        this.app = express();
    };
    socketServer.prototype.createServer = function () {
        this.server = http_1.createServer(this.app);
    };
    socketServer.prototype.config = function () {
        this.port = process.env.PORT || socketServer.PORT;
    };
    socketServer.prototype.sockets = function () {
        this.io = socketIo(this.server);
    };
    socketServer.prototype.listen = function () {
        var _this = this;
        this.server.listen(this.port, function () {
            console.log('Running server on port %s', _this.port);
        });
        this.io.on('connect', function (socket) {
            console.log('Connected client on port %s.', _this.port);
            socket.on('message', function (m) {
                console.log('[server](message): %s', JSON.stringify(m));
                _this.io.emit('message', m);
            });
            socket.on('disconnect', function () {
                console.log('Client disconnected');
            });
        });
    };
    socketServer.prototype.getApp = function () {
        return this.app;
    };
    socketServer.PORT = 81;
    return socketServer;
}());
exports.socketServer = socketServer;
//# sourceMappingURL=socket_server.js.map