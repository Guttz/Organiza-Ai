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
var card_1 = require("../../common_components/schemas/card");
var of_1 = require("rxjs/observable/of");
var socketComunicator_service_1 = require("../socketComunicator/socketComunicator.service");
var UserSettingsService = /** @class */ (function () {
    function UserSettingsService(http, socketService) {
        var _this = this;
        this.http = http;
        this.socketService = socketService;
        this.url = "http://myas.com.br";
        //List names for the backend requests be directly to the right collection
        this.listsNames = ["atendimento", "agPecas", "rtVisita", "pagamento", "finalizado"];
        this.iMadeTheChange = false;
        this.initialize();
        socketService.initSocket();
        //Setting what the service will do when recive and change signal from the socket
        this.ioConnection = this.socketService.getChanges().subscribe(function (message) {
            if (!_this.iMadeTheChange) {
                console.log("Mensagem recebida");
                console.log(message);
                var msgJson = message;
                var cardAux = new card_1.Card();
                var fromList = msgJson.fromList;
                var toList = msgJson.toList;
                delete msgJson.fromList;
                delete msgJson.toList;
                cardAux.init(msgJson);
                console.log(cardAux);
                _this.moveCardFront(cardAux, fromList, toList);
            }
            else {
                _this.iMadeTheChange = false;
            }
        });
    }
    UserSettingsService.prototype.initialize = function () {
        var listsAux = [
            {
                name: 'Em Análise',
                cards: [],
                id: 0
            },
            {
                name: 'Aguardando Peças',
                cards: [],
                id: 1
            },
            {
                name: 'Em conserto',
                cards: [],
                id: 2
            },
            {
                name: 'Pagamento',
                cards: [],
                id: 3
            },
            {
                name: 'Clientes finalizados',
                cards: [],
                id: 4
            }
        ];
        this.lists = listsAux;
        if (window.location.href.match(/www/) != null) {
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
        this.requestAllOrcas();
    };
    //Method to request data from db
    UserSettingsService.prototype.requestOrca = function (i) {
        var _this = this;
        console.log(this.url + "/api/get_" + this.listsNames[i]);
        this.http.get(this.url + "/api/get_" + this.listsNames[i]).subscribe(function (data) {
            _this.dataHolder = data;
            for (var j = 0; j < _this.dataHolder.length; j++) {
                //Checking if this card is alerady on this list
                var isAleredy = false;
                for (var k = 0; k < _this.lists[i].cards.length; k++) {
                    if (_this.lists[i].cards[k].getOrdServ() == _this.dataHolder[j]) {
                        isAleredy = true;
                        break;
                    }
                }
                if (isAleredy)
                    continue;
                //Adding the new card
                var card = new card_1.Card();
                //this.dataHolder[j].ordServ = this.dataHolder[j]._id;
                console.log(_this.dataHolder[j]);
                card.init(_this.dataHolder[j]);
                _this.lists[i].cards.push(card);
            }
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    UserSettingsService.prototype.moveCardFront = function (card, fromList, toList) {
        //Checking if is needed to remove some card
        if (fromList == -1) {
            //Inserting the card on the new list
            this.lists[toList].cards.push(card);
            return true;
        }
        else {
            //Delete the card from list
            var listSize = this.lists[fromList].cards.length;
            var found = false;
            for (var i = 0; i < listSize; i++) {
                if (this.lists[fromList].cards[i].getOrdServ() == card.getOrdServ()) {
                    this.lists[fromList].cards.splice(i, 1);
                    found = true;
                    break;
                }
                if (found)
                    break;
            }
            //Inserting the card on the new list
            this.lists[toList].cards.push(card);
            return true;
        }
    };
    UserSettingsService.prototype.requestAllOrcas = function () {
        this.requestOrca(0);
        this.requestOrca(1);
        this.requestOrca(2);
        this.requestOrca(3);
        this.requestOrca(4);
    };
    UserSettingsService.prototype.requestGet = function (msg) {
        this.socketService.sendChanges(msg);
    };
    UserSettingsService.prototype.getOrcasList = function () {
        return of_1.of(this.lists);
    };
    /*Apply some command in one list
      @Params:
      commandAdd: Url of the command to add the card on new list(send to back end)
      commandRemove: Url of the command to remove the card on new list(send to back end)
      card: The that will be changed
    */
    UserSettingsService.prototype.addAndRemove = function (card, fromList, toList) {
        if (card == undefined) {
            console.log("O cartão enviado para função 'addAndRemove' não é valido.");
            return false;
        }
        console.log("Movendo da lista: " + fromList + " Pra lista " + toList + " o card \n");
        console.log(card);
        this.moveCardFront(card, fromList, toList);
        this.iMadeTheChange = true;
        //Updating db and other clients
        var self = this;
        this.moveCardDB(fromList, toList, card, function (err, res) {
            if (err) {
                console.log("Não foi possivel fazer alterações no banco de dados.");
                console.log("Erro: " + err.error.message);
                return;
            }
            var toSend = Object();
            toSend = card;
            toSend.toList = toList;
            toSend.fromList = fromList;
            self.requestGet(toSend);
        });
    };
    UserSettingsService.prototype.addNewCard = function (card, toList) {
        var _this = this;
        //Adding card to another part of db
        this.http.post(this.url + "/api/add_" + this.listsNames[toList], card).subscribe(function (res) {
            var aux = Object();
            aux = res;
            aux.ordServ = aux._id;
            var cardAux = new card_1.Card;
            cardAux.init(aux);
            var toSend = Object();
            toSend = cardAux.getJson();
            toSend.toList = toList;
            toSend.fromList = -1;
            _this.requestOrca(0);
            _this.iMadeTheChange = true;
            _this.requestGet(toSend);
            return true;
        }, function (err) {
            console.log("Error occured: " + err.error.message);
            return false;
        });
        return true;
    };
    UserSettingsService.prototype.removeCard = function (ordServ, fromList) {
        //Adding card to another part of db
        this.http.post(this.url + "/api/remove_" + this.listsNames[fromList], ordServ).subscribe(function (res) {
            /*        card.fromList = fromList;
                    this.iMadeTheChange = true;
            
                    this.requestGet(card);*/
            return true;
        }, function (err) {
            console.log("Error occured: " + err.error.message);
            return false;
        });
        return true;
    };
    UserSettingsService.prototype.moveCardDB = function (fromList, toList, card, callback) {
        if (callback === void 0) { callback = null; }
        //Moving the card on DB
        var toSend = Object();
        toSend = card.getJson();
        toSend.toList = this.listsNames[toList];
        toSend.fromList = this.listsNames[fromList];
        this.http.post(this.url + "/api/add_and_remove", toSend).subscribe(function (data) {
            callback(null, data);
        }, function (err) {
            callback(err, null);
        });
        return true;
    };
    UserSettingsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, socketComunicator_service_1.SocketComunicator])
    ], UserSettingsService);
    return UserSettingsService;
}());
exports.UserSettingsService = UserSettingsService;
//# sourceMappingURL=userSettings.js.map