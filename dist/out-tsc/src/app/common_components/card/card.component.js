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
var card_1 = require("../schemas/card");
var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        this.reducedID = this.card.getOrdServ().substring(17, 24);
    };
    CardComponent.prototype.dragStart = function (ev) {
        ev.dataTransfer.setData('text', ev.target.id);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", card_1.Card)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        core_1.Component({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());
exports.CardComponent = CardComponent;
//# sourceMappingURL=card.component.js.map