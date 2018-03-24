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
var MyInputTextComponent = /** @class */ (function () {
    function MyInputTextComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MyInputTextComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MyInputTextComponent.prototype, "width", void 0);
    MyInputTextComponent = __decorate([
        core_1.Component({
            selector: 'my-input-text',
            templateUrl: './my-input-text.component.html',
            styleUrls: ['./my-input-text.component.sass']
        })
    ], MyInputTextComponent);
    return MyInputTextComponent;
}());
exports.MyInputTextComponent = MyInputTextComponent;
//# sourceMappingURL=my-input-text.component.js.map