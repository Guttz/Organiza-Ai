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
var listSchema_1 = require("../schemas/listSchema");
var http_1 = require("@angular/common/http");
var ListComponent = /** @class */ (function () {
    function ListComponent(http) {
        this.http = http;
    }
    ListComponent.prototype.ngOnInit = function () {
        //const cardId = this.cardStore.newCard("Orçamento",  "data[i]._id", "data[i].defeito", "data[i].nome", "data[i].telPrimario", new Date("01/01/2000") , "data[i].periodo", "data[i].endereco", "data[i].marca", "data[i].modelo", "data[i].telSecundario", "data[i].email", null, null, null, null, null, null);
        //const cardIdd = this.cardStore.newCard("Orçamento",  "data[i]._id", "data[i].defeito", "data[i].nome", "data[i].telPrimario", new Date("02/01/2000") , "data[i].periodo", "data[i].endereco", "data[i].marca", "data[i].modelo", "data[i].telSecundario", "data[i].email", null, null, null, null, null, null);
        //const cardIddd = this.cardStore.newCard("Orçamento",  "data[i]._id", "data[i].defeito", "data[i].nome", "data[i].telPrimario", new Date("03/01/2000") , "data[i].periodo", "data[i].endereco", "data[i].marca", "data[i].modelo", "data[i].telSecundario", "data[i].email", null, null, null, null, null, null);
        //const cardIdd = this.cardStore.newCard("Atendimento", "Lucas Araújo", "(41) 9979 19187", new Date("October 13, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
        //const cardIddd = this.cardStore.newCard("Atendimento", "Lucas Araújo", "(41) 9979 19187", new Date("October 13, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
        //this.list.cards.push(cardId);
        //this.list.cards.push(cardIdd);
        //this.list.cards.push(cardIddd);
    };
    ListComponent.prototype.allowDrop = function ($event) {
        $event.preventDefault();
    };
    ListComponent.prototype.dragStart = function ($event) {
        /*    var index = this.list.cards.indexOf($event.target.id);
            if (index > -1) {
              this.list.cards.splice(index, 1);
            }*/
        $event.dataTransfer.setData('text', this.list.id + $event.dataTransfer.getData('text'));
    };
    ListComponent.prototype.drop = function ($event) {
        $event.preventDefault();
        /*    const data = $event.dataTransfer.getData('text');
        
            $event.dataTransfer.setData('text', $event.target.id);
        
            let target = $event.target;
            const targetClassName = target.className;
        
        
            while (target.className !== 'list') {
              target = target.parentNode;
            }
        
            this.list.cards.push(data);
            
            window.alert( this.list.cards );
        */
    };
    ListComponent.prototype.setListHeaders = function (fromList, toList, card, callback) {
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
    ListComponent.prototype.changHeader = function () {
        this.http.post(this.url + "/api/add_and_remove").subscribe(function (data) {
            console.log(null, data);
        }, function (err) {
            console.log("Erro na mudança de cabeçalho: " + err);
        });
        console.log("here" + this.list.name);
    };
    ListComponent.prototype.compare = function (a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", listSchema_1.ListSchema)
    ], ListComponent.prototype, "list", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map