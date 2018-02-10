webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_form_dados_cliente_form_dados_cliente_component__ = __webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_acompanhamento_acompanhamento_component__ = __webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_historico_historico_component__ = __webpack_require__("../../../../../src/app/pages/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*Import dos formularios*/





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'cadastro-cliente',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_form_dados_cliente_form_dados_cliente_component__["a" /* FormDadosClienteComponent */]
    },
    {
        path: 'acompanhamento',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_acompanhamento_acompanhamento_component__["a" /* AcompanhamentoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */]]
    },
    {
        path: 'historico',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_historico_historico_component__["a" /* HistoricoComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'recuperar-senha',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__common_components_my_input_text_my_input_text_component__ = __webpack_require__("../../../../../src/app/common_components/my-input-text/my-input-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_components_card_card_component__ = __webpack_require__("../../../../../src/app/common_components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_components_list_list_component__ = __webpack_require__("../../../../../src/app/common_components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_components_my_button_my_button_component__ = __webpack_require__("../../../../../src/app/common_components/my-button/my-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_components_my_button_bw_my_button_bw_component__ = __webpack_require__("../../../../../src/app/common_components/my-button-bw/my-button-bw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_components_my_input_select_my_input_select_component__ = __webpack_require__("../../../../../src/app/common_components/my-input-select/my-input-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_components_my_form_header_my_form_header_component__ = __webpack_require__("../../../../../src/app/common_components/my-form-header/my-form-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_form_dados_cliente_form_dados_cliente_component__ = __webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_header_toolbar_header_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/header-toolbar/header-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_acompanhamento_acompanhamento_component__ = __webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_historico_historico_component__ = __webpack_require__("../../../../../src/app/pages/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*Angular material components*/













/*Import dos componentes simples*/







/*Import dos formularios*/


/*Import de bibliotecas*/

/*Import das Páginas*/






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__common_components_my_input_text_my_input_text_component__["a" /* MyInputTextComponent */],
                __WEBPACK_IMPORTED_MODULE_20__common_components_my_button_my_button_component__["a" /* MyButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_21__common_components_my_button_bw_my_button_bw_component__["a" /* MyButtonBwComponent */],
                __WEBPACK_IMPORTED_MODULE_18__common_components_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__common_components_my_input_select_my_input_select_component__["a" /* MyInputSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_form_dados_cliente_form_dados_cliente_component__["a" /* FormDadosClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_23__common_components_my_form_header_my_form_header_component__["a" /* MyFormHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_header_toolbar_header_toolbar_component__["a" /* HeaderToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_acompanhamento_acompanhamento_component__["a" /* AcompanhamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_historico_historico_component__["a" /* HistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_acompanhamento_acompanhamento_component__["b" /* ClienteAtenderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_25__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_28__pages_acompanhamento_acompanhamento_component__["a" /* AcompanhamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_acompanhamento_acompanhamento_component__["b" /* ClienteAtenderComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_30__pages_login_login_component__["a" /* LoginComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/card/card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    background: white;\r\n    margin: 0 0 6px 0;\r\n    padding: 6px 6px 2px 8px;\r\n}\r\n\r\n.card{\r\n\tbackground: white;\r\n\tborder-color: white;\r\n\tborder-style: solid;\r\n\tpadding: 7px;\r\n\tborder-radius: 4px;\r\n\tmargin-top: 4px;\r\n\tline-height: 22px;\r\n\tfont-size: 14px;\r\n\tcursor: move; /* fallback: no `url()` support or images disabled */\r\n    cursor: -webkit-grab; /* Chrome 1-21, Safari 4+ */ /* Firefox 1.5-26 */\r\n    cursor:         grab; /* W3C standards syntax, should come least */\r\n}\r\n\r\n.card:active{\r\n\tcursor: -webkit-grabbing;\r\n    cursor:         grabbing;\r\n}\r\n\r\n.my-card-des{\r\n\tcolor: #FC5914;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" draggable=\"true\" (dragstart)=\"dragStart($event)\" id=\"{{card.id}}\">\r\n\r\n<div >\r\n\t<span><b> <!-- {{card.id}}--> {{card.client}} -</b></span>\r\n\r\n\t<span class=\"my-card-des\"><b>{{card.description}}</b></span>\r\n</div>\r\n\r\n<div>\r\n\t<span>Tel.</span>\r\n\t<span> <b> <span style=\"color: rgb(51, 97, 134);\">{{card.number}}</span> - {{card.day}}/{{card.month}} {{card.period}} </b></span>\r\n</div>\r\n\r\n<span>{{card.adress}}</span>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common_components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemas_cardSchema__ = __webpack_require__("../../../../../src/app/common_components/schemas/cardSchema.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.dragStart = function (ev) {
        ev.dataTransfer.setData('text', ev.target.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__schemas_cardSchema__["a" /* CardSchema */])
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/common_components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list {\r\n  height: 87vh;\r\n  overflow: auto;\r\n}\r\n\r\n.list_border{\r\n      background: rgba(215,213,214, 0.6);\r\n    width: 25vw;\r\n    padding: 4px;\r\n    margin: 4px;\r\n    margin-top: 30px;\r\n    display: inline-block;\r\n    border-radius: 8px;\r\n\r\n}\r\n\r\n.list__title {\r\n    margin: 0;\r\n    padding-top: 15px;\r\n    cursor: context-menu; \r\n    padding-left: 8px;\r\n    padding-bottom: 11px;\r\n    font-size: 14px;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.list a {\r\n    width: 100%;\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n \r\ninput{\r\n  width: 248px;\r\n  padding: 5px;\r\n  border: 2px solid orange;\r\n  outline: 0;\r\n  background: #fff;\r\n  box-shadow:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"list\" (dragover)=\"allowDrop($event)\" (drop)=\"drop($event)\" id=\"{{list.id}}\">\r\n\t<div class=\"list_border\">\r\n\r\n  <p class=\"list__title\"><strong> <!-- {{list.id}}--> {{list.name}} </strong></p>\r\n\r\n  <div (dragover)=\"allowDrop($event)\" class=\"cards\">\r\n    <app-card (dragstart)=\"dragStart($event)\" (dragover)=\"allowDrop($event)\" *ngFor=\"let cardId of list.cards\" [card]=\"cardStore.getCard(cardId)\"></app-card>\r\n  </div>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/common_components/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schemas_listSchema__ = __webpack_require__("../../../../../src/app/common_components/schemas/listSchema.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schemas_cardStore__ = __webpack_require__("../../../../../src/app/common_components/schemas/cardStore.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
        var cardId = this.cardStore.newCard("Orçamento", "Gustavo Morais", "(41) 99791 9187", new Date("October 23, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
        var cardIdd = this.cardStore.newCard("Atendimento", "Lucas Araújo", "(41) 9979 19187", new Date("October 13, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
        var cardIddd = this.cardStore.newCard("Atendimento", "Lucas Araújo", "(41) 9979 19187", new Date("October 13, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
        this.list.cards.push(cardId);
        this.list.cards.push(cardIdd);
        this.list.cards.push(cardIddd);
    };
    ListComponent.prototype.allowDrop = function ($event) {
        $event.preventDefault();
    };
    ListComponent.prototype.dragStart = function ($event) {
        /*    var index = this.list.cards.indexOf($event.target.id);
            if (index > -1) {
              this.list.cards.splice(index, 1);
            }*/
        $event.dataTransfer.setData('text', $event.dataTransfer.getData('text') + this.list.id);
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
    ListComponent.prototype.compare = function (a, b) {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__schemas_listSchema__["a" /* ListSchema */])
    ], ListComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__schemas_cardStore__["a" /* CardStore */])
    ], ListComponent.prototype, "cardStore", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/common_components/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/my-button-bw/my-button-bw.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button class =\"my-button\">{{label}}</button>"

/***/ }),

/***/ "../../../../../src/app/common_components/my-button-bw/my-button-bw.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-button {\n  background: #d7d7d7;\n  box-shadow: 0px 0px 6px rgba(120, 120, 120, 0.5);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #000000;\n  width: 20vw;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/my-button-bw/my-button-bw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyButtonBwComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyButtonBwComponent = (function () {
    function MyButtonBwComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyButtonBwComponent.prototype, "label", void 0);
    MyButtonBwComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-button-bw',
            template: __webpack_require__("../../../../../src/app/common_components/my-button-bw/my-button-bw.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/my-button-bw/my-button-bw.component.sass")]
        })
    ], MyButtonBwComponent);
    return MyButtonBwComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/my-button/my-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-button class='my-button'>{{label}}</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/common_components/my-button/my-button.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 20vw;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/my-button/my-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyButtonComponent = (function () {
    function MyButtonComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyButtonComponent.prototype, "label", void 0);
    MyButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-button-orange',
            template: __webpack_require__("../../../../../src/app/common_components/my-button/my-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/my-button/my-button.component.scss")]
        })
    ], MyButtonComponent);
    return MyButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/my-form-header/my-form-header.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"my-header\">\r\n  {{label}}\r\n</h2>\r\n"

/***/ }),

/***/ "../../../../../src/app/common_components/my-form-header/my-form-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-header {\n  font-size: 24px;\n  color: #201345;\n  font-weight: 400; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/my-form-header/my-form-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFormHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyFormHeaderComponent = (function () {
    function MyFormHeaderComponent() {
    }
    MyFormHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyFormHeaderComponent.prototype, "label", void 0);
    MyFormHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-form-header',
            template: __webpack_require__("../../../../../src/app/common_components/my-form-header/my-form-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/my-form-header/my-form-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyFormHeaderComponent);
    return MyFormHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/my-input-select/my-input-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"label-input\" >\r\n  <mat-form-field>\r\n    <mat-select placeholder={{label}}>\r\n      <mat-option *ngFor=\"let value of values\" [(value)]=\"value.value\" [ngStyle]=\"{width: width + 'px'}\">\r\n        {{ value.viewValue }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<ul >\r\n  <li *ngFor=\"let value of values\">\r\n    <span class=\"badge\">{{value.value}}</span>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/common_components/my-input-select/my-input-select.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label-input {\n  display: inline;\n  float: left;\n  padding-right: 5%;\n  padding-bottom: 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/my-input-select/my-input-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInputSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyInputSelectComponent = (function () {
    function MyInputSelectComponent() {
        console.log("Valor de values: ", this.values);
    }
    MyInputSelectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyInputSelectComponent.prototype, "values", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyInputSelectComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyInputSelectComponent.prototype, "width", void 0);
    MyInputSelectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-select',
            template: __webpack_require__("../../../../../src/app/common_components/my-input-select/my-input-select.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/my-input-select/my-input-select.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MyInputSelectComponent);
    return MyInputSelectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/my-input-text/my-input-text.component.html":
/***/ (function(module, exports) {

module.exports = "\t<mat-form-field class=\"label-input\">\r\n\t\t<input matInput class=\"my-input\" placeholder={{label}} type=\"text\" [ngStyle]=\"{width: width + 'px'}\">\r\n\t</mat-form-field>\r\n"

/***/ }),

/***/ "../../../../../src/app/common_components/my-input-text/my-input-text.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".label-input {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/my-input-text/my-input-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyInputTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyInputTextComponent = (function () {
    function MyInputTextComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyInputTextComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MyInputTextComponent.prototype, "width", void 0);
    MyInputTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-input-text',
            template: __webpack_require__("../../../../../src/app/common_components/my-input-text/my-input-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/common_components/my-input-text/my-input-text.component.sass")]
        })
    ], MyInputTextComponent);
    return MyInputTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/schemas/cardSchema.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardSchema; });
var CardSchema = (function () {
    function CardSchema() {
    }
    return CardSchema;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/schemas/cardStore.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardSchema__ = __webpack_require__("../../../../../src/app/common_components/schemas/cardSchema.ts");

//Classe usada para administrar os IDs de novos cartões e administra-los,
//other parts of the code sólo interactúan con los números, te amo lucas <3
var CardStore = (function () {
    function CardStore() {
        this.cards = {};
        this.lastId = -1;
    }
    CardStore.prototype._addCard = function (card) {
        card.id = String(++this.lastId);
        this.cards[card.id] = card;
        return card.id;
    };
    CardStore.prototype.getCard = function (cardId) {
        return this.cards[parseInt(cardId)];
    };
    CardStore.prototype.newCard = function (description, client, number, date, period, adress) {
        var card = new __WEBPACK_IMPORTED_MODULE_0__cardSchema__["a" /* CardSchema */]();
        card.description = description;
        card.client = client;
        card.adress = adress;
        card.date = date;
        card.period = period;
        card.number = number;
        card.day = date.getDate();
        card.month = date.getMonth() + 1;
        return (this._addCard(card));
    };
    return CardStore;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/schemas/listSchema.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListSchema; });
var ListSchema = (function () {
    function ListSchema() {
    }
    return ListSchema;
}());



/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/acompanhamento.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-toolbar></app-header-toolbar>\r\n<div >\r\n  <app-list (drop)=\"drop($event)\" *ngFor=\"let list of lists\" [list]=\"list\" [cardStore]=\"cardStore\"></app-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/acompanhamento.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  background: rgba(235, 233, 234, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0px 30px;\n  width: 100%;\n  height: 100%;\n  background-opacity: 0.18; }\n\n.mat-dialog-container {\n  background: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/acompanhamento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClienteAtenderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcompanhamentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_schemas_cardStore__ = __webpack_require__("../../../../../src/app/common_components/schemas/cardStore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ClienteAtenderComponent = (function () {
    function ClienteAtenderComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ClienteAtenderComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ClienteAtenderComponent.prototype.ngOnInit = function () {
    };
    ClienteAtenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cliente-atender',
            template: __webpack_require__("../../../../../src/app/pages/acompanhamento/cliente-atender.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/acompanhamento/cliente-atender.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialogRef */], Object])
    ], ClienteAtenderComponent);
    return ClienteAtenderComponent;
}());

var AcompanhamentoComponent = (function () {
    function AcompanhamentoComponent(http, dialog) {
        this.http = http;
        this.dialog = dialog;
    }
    AcompanhamentoComponent.prototype.makeMockData = function () {
        this.cardStore = new __WEBPACK_IMPORTED_MODULE_1__common_components_schemas_cardStore__["a" /* CardStore */]();
        var lists = [
            {
                name: 'Orçamento',
                cards: [],
                id: "l0"
            },
            {
                name: 'Clientes a atender',
                cards: [],
                id: "l1"
            },
            {
                name: 'Clientes finalizados',
                cards: [],
                id: "l2"
            }
        ];
        this.lists = lists;
    };
    AcompanhamentoComponent.prototype.ngOnInit = function () {
        this.makeMockData();
        this.lists[0].cards.sort();
    };
    AcompanhamentoComponent.prototype.getCards = function () {
        this.http.get("/get_cards").subscribe(function (data) {
            //Agora todos os dados estao na variavel data
            //Exemplo de uso:
            console.log("Cliente " + data.client);
        });
    };
    AcompanhamentoComponent.prototype.openDialogAtender = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ClienteAtenderComponent, {
            width: '44vw',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed' + result.marca);
            _this.animal = result;
        });
    };
    AcompanhamentoComponent.prototype.drop = function ($event) {
        var target = $event.target;
        //Get from the the dom transfer the id of the card that was transfered and the list it came from
        var cardNlist = $event.dataTransfer.getData('text');
        while (target.className !== 'list') {
            target = target.parentNode;
        }
        //Old list ID, the one it came from
        var oldList = parseInt(cardNlist.substring(2, 3));
        //New list ID, the one that the card is being dropped
        var newList = parseInt(target.id.substring(1, 2));
        if (oldList == 0 && newList == 1) {
            this.openDialogAtender();
        }
        else {
        }
        var inserted = false;
        if (oldList != newList) {
            var listLenght = this.lists[newList].cards.length;
            //this.lists[ parseInt(target.id.substring(1,2)) ].cards.push( this.cardStore.newCard(this.cardStore.getCard(cardNlist.substring(0,1)).description)); 
            var i;
            for (i = 0; i < listLenght; i++) {
                if (this.cardStore.getCard(cardNlist.substring(0, 1)).date < this.cardStore.getCard(this.lists[newList].cards[i]).date) {
                    this.lists[newList].cards.splice(i, 0, this.cardStore.getCard(cardNlist.substring(0, 1)).id);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.lists[newList].cards.splice(i, 0, this.cardStore.getCard(cardNlist.substring(0, 1)).id);
            }
            //window.alert(this.cardStore.getCard(cardNlist.substring(0,1)).date >= this.cardStore.getCard( this.lists[newList].cards[0] ).date);
            //this.lists[newList].cards.push( this.cardStore.getCard(cardNlist.substring(0,1)).id ); 
            this.lists[oldList].cards.splice(this.lists[parseInt(cardNlist.substring(2, 3))].cards.indexOf(this.cardStore.getCard(cardNlist.substring(0, 1)).id), 1);
            //window.alert(  this.lists[ parseInt( cardNlist.substring(2,3)) ].cards );
        }
    };
    AcompanhamentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-acompanhamento',
            template: __webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDialog */]])
    ], AcompanhamentoComponent);
    return AcompanhamentoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/cliente-atender.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\"> \r\n<h1 mat-dialog-title>Informações do Orçamento</h1>\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"100\">\r\n            <input [(ngModel)]=\"data.defeito\" matInput ngDefaultControl placeholder=\"Qual defeito apresentado?\">\r\n          </mat-form-field> \r\n      \t</div>\r\n\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.marca\" matInput ngDefaultControl placeholder=\"Marca\">\r\n          </mat-form-field> \r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.modelo\" matInput ngDefaultControl placeholder=\"Modelo\">\r\n          </mat-form-field> \r\n\r\n\t    </div>\r\n\r\n\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.datadisp\" matInput ngDefaultControl placeholder=\"Data de disponibilidade\">\r\n          </mat-form-field> \r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.hordisp\" matInput ngDefaultControl placeholder=\"Horário de disponibilidade\">\r\n          </mat-form-field> \r\n\r\n\t    </div>\r\n\r\n\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\r\n      \t<my-button-bw (click)=\"onNoClick()\" label=\"CANCELAR\" style=\"margin-top: 12px; margin-right: 5px;\"  >\r\n      \t</my-button-bw>\r\n\r\n\r\n        <button class=\"my-button\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial style=\"margin-top: 12px;\">CONFIRMAR</button>\r\n  \r\n<!--         <my-button-orange [mat-dialog-close]=\"data.animal\"\r\n          fxFlexAlign=\"center\" label=\"CONFIRMAR\" style=\"margin-top: 12px;\">\r\n        </my-button-orange>  -->\r\n      </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/cliente-atender.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 20vw;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = " <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100vh;\">\r\n        \r\n        <div class=\"login-img\" fxFlex=\"39\">\r\n        \t<img routerLink=\"/acompanhamento\" class=\"my-log-img\" src=\"assets/images/login_1.png\">\r\n        </div>\r\n\r\n        \r\n\r\n\t <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"61\">       \r\n\r\n      <div style=\"width: 17%;\">\r\n  \t\t\t<img routerLink=\"/login\" class=\"my-logo\" src=\"assets/images/logo-login.png\">\r\n  \t\t</div>\r\n\r\n\t\t<h4 class=\"my-recover\"> Recuperação senha </h4>\r\n\r\n        <mat-form-field fxFlexOffset=\"0\" class=\"my-inputs\">\r\n              <input matInput name=\"email\" placeholder=\"Insira seu email\" >\r\n        </mat-form-field>\r\n\r\n        <my-button-orange fxFlexOffset=\"2\" label=\"RECUPERAR\" class=\"enter-button\" ></my-button-orange>\r\n    \r\n        <span routerLink=\"/login\" fxFlexOffset=\"7\" class=\"forgot-password\">Eu sei minha senha!</span>\r\n    </div> \r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\n  margin: 0px;\n  background: black; }\n\n.my-log-img {\n  width: 100%;\n  height: 100%; }\n\n.my-logo {\n  width: 100%;\n  height: 100%; }\n\n.my-inputs {\n  width: 50%; }\n\n.enter-button {\n  width: 50%; }\n\n.forgot-password {\n  font-size: 13px;\n  color: #B5B5B5;\n  cursor: pointer; }\n\n.my-recover {\n  font-size: 19px;\n  font-weight: 300;\n  margin-top: 8.6%;\n  margin-bottom: 2%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-toolbar></app-header-toolbar>\r\n<div style=\"width: 100vw; height: 90vh;   overflow: auto; background: rgba(235,233,234, 0.3);\">\r\n  <form #userCadForm=\"ngForm\" >\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex=\"70\">\r\n        <my-form-header label=\"Cadastro Cliente\"></my-form-header>\r\n        <div fxLayout=\"row\" >\r\n          <mat-form-field fxFlex=\"32\">\r\n            <input matInput \r\n              [ngModel] = \"user.cpf\" \r\n              ngDefaultControl \r\n              name=\"cpf\" \r\n              placeholder=\"CPF\" \r\n              (blur)=\"checkUser(userCadForm)\" \r\n              required>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"70\">\r\n            <input matInput \r\n              [(ngModel)] = \"user.nome\" \r\n              ngDefaultControl\r\n              name=\"nome\" \r\n              placeholder=\"Nome completo do cliente\" \r\n              required>\r\n          </mat-form-field>    \r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput \r\n              [(ngModel)] = \"user.telefone\" \r\n              ngDefaultControl \r\n              name=\"telefone\" \r\n              placeholder=\"Telefone primário\"  \r\n              required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex fxFlexOffset=\"2\">\r\n            <input matInput \r\n              [(ngModel)] = \"user.celular\" \r\n              ngDefaultControl \r\n              name=\"celular\" \r\n              placeholder=\"Telefone secundário\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field fxFlex fxFlexOffset=\"2\">\r\n            <input matInput \r\n              [(ngModel)] = \"user.email\" \r\n              ngDefaultControl \r\n              name=\"email\" \r\n              placeholder=\"Email\" >\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row\">\r\n\r\n        <mat-form-field fxFlex>\r\n            <input matInput \r\n              [(ngModel)] = \"user.endereco\" \r\n              ngDefaultControl \r\n              name=\"endereco\" \r\n              placeholder=\"Endereço completo\"\r\n              required>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" *ngIf=((!update)) >\r\n        <my-button-orange \r\n          fxFlexAlign=\"center\" \r\n          label=\"CADASTRAR CLIENTE\" \r\n          style=\"margin-top: 12px;\" \r\n          (click)=\"userForm(userCadForm)\">\r\n        </my-button-orange>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" *ngIf=((update)) >\r\n        <my-button-orange \r\n          fxFlexAlign=\"center\" \r\n          label=\"ATUALIZAR CLIENTE\" \r\n          style=\"margin-top: 12px;\" \r\n          (click)=\"updateUser(userCadForm)\">\r\n        </my-button-orange>\r\n      </div>\r\n      </div>\r\n    </div>\r\n\r\n  </form >\r\n\r\n  <form #orcaCadForm=\"ngForm\" >\r\n    <div class=\"row\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex = \"70\">\r\n        <my-form-header label=\"Informações do Orçamento\"></my-form-header>\r\n          <div class=\"row\" >\r\n\r\n            <mat-form-field fxFlex=\"32\">\r\n              <input matInput \r\n              name=\"cpf\" \r\n              [(ngModel)]=\"orca.cpf\" \r\n              ngDefaultControl \r\n              placeholder=\"CPF do Cliente\"  \r\n              (blur)=\"checkUser(orcaCadForm)\"\r\n              required>\r\n            </mat-form-field>\r\n            <my-input-text fxFlex \r\n              name=\"defeito\" \r\n              [(ngModel)]=\"orca.defeito\" \r\n              ngDefaultControl \r\n              fxFlexOffset=2 \r\n              label=\"Qual o defeito apresentado?\"\r\n              required> \r\n            </my-input-text>\r\n          </div>\r\n\r\n          <div class=\"row\" >\r\n            <mat-form-field fxFlex>\r\n              <mat-select \r\n                placeholder=\"Marca\"  \r\n                [(ngModel)]=\"orca.marca\" \r\n                name=\"marca\" >\r\n                <mat-option \r\n                  *ngFor=\"let value of values\" \r\n                  [(value)]=\"value.value\" \r\n                  [ngStyle]=\"{width: width + 'px'}\">\r\n                  {{ value.viewValue }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-form-field \r\n              name=\"data\" \r\n              [(ngModel)]=\"orca.data\" \r\n              ngDefaultControl \r\n              fxFlexOffset=\"2\" \r\n              fxFlex\r\n              required>\r\n\r\n              <input matInput \r\n              [matDatepicker]=\"picker\" \r\n              placeholder=\"Data de visita\"\r\n              required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n            <my-input-text \r\n              name=\"modelo\" \r\n              [(ngModel)]=\"orca.modelo\" \r\n              ngDefaultControl \r\n              fxFlexOffset=\"2\" \r\n              fxFlex label=\"Modelo\" \r\n              required> \r\n            </my-input-text>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n\r\n            <my-input-text \r\n              fxFlex=\"32\" \r\n              name =\"periodo\" \r\n              [(ngModel)] =\"orca.periodo\" \r\n              ngDefaultControl \r\n              label=\"Período de disponibilidade\" \r\n              required> \r\n            </my-input-text>\r\n\r\n            <div fxFlex=\"grow\"></div>\r\n\r\n            <my-button-orange \r\n              fxFlexAlign=\"center\" \r\n              label=\"CONTINUAR ORÇAMENTO\" \r\n              (click)=\"orcaForm(orcaCadForm)\">\r\n                \r\n            </my-button-orange>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n  </form> \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDadosClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormDadosClienteComponent = (function () {
    function FormDadosClienteComponent(http) {
        this.http = http;
        this.values = [
            { value: '0', viewValue: 'Marca 0' },
            { value: '1', viewValue: 'Marca 1' },
            { value: '2', viewValue: 'Marca 2' }
        ];
        //TEL    Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
        //CEL  Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
        //CPF    Validators.pattern(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
        this.user = { cpf: '', nome: '', telefone: '', celular: '', email: '', endereco: '' };
        this.orca = { cpf: '', defeito: '', marca: '', data: new Date(1995, 10, 7), modelo: '', periodo: '' };
        this.update = false;
    }
    FormDadosClienteComponent.prototype.ngOnInit = function () {
    };
    FormDadosClienteComponent.prototype.userForm = function (myForm) {
        //cheking if any required field is empty
        if (myForm.value.cpf == "" || myForm.value.nome == "" || myForm.value.telefone == "" || myForm.value.endereco == "") {
            alert("Os campos com * devem ser preenchidos.");
            return null;
        }
        var req = this.http.post('http://localhost:3000/add_cli', myForm.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
        this.update = false;
        this.user.nome = '';
        this.user.telefone = '';
        this.user.celular = '';
        this.user.email = '';
        this.user.endereco = '';
        this.orca.cpf = myForm.value.cpf;
    };
    FormDadosClienteComponent.prototype.getValues = function () {
        return this.values;
    };
    FormDadosClienteComponent.prototype.updateUser = function (myForm) {
        //cheking if any required field is empty
        if (myForm.value.cpf == "" || myForm.value.nome == "" || myForm.value.telefone == "" || myForm.value.endereco == "") {
            alert("Os campos com * devem ser preenchidos.");
            return null;
        }
        var req = this.http.post('http://localhost:3000/update_cli', myForm.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
        this.update = false;
        this.user.cpf = '';
        this.user.nome = '';
        this.user.telefone = '';
        this.user.celular = '';
        this.user.email = '';
        this.user.endereco = '';
        this.orca.cpf = myForm.value.cpf;
    };
    FormDadosClienteComponent.prototype.orcaForm = function (myForm) {
        //cheking if any required field is empty
        if (myForm.value.cpf == "" || myForm.value.defeito == "" || myForm.value.marca == "" || myForm.value.data == ""
            || myForm.value.modelo == "" || myForm.value.periodo == "") {
            alert("Os campos com * devem ser preenchidos.");
            return null;
        }
        var req = this.http.post('http://localhost:3000/add_orca', myForm.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
        console.log("Output = " + req);
    };
    FormDadosClienteComponent.prototype.checkUser = function (myForm) {
        var _this = this;
        this.http.post("/get_user", myForm.value).subscribe(function (data) {
            if (data != null) {
                _this.user.cpf = data.cpf;
                _this.orca.cpf = data.cpf;
                _this.user.nome = data.nome;
                _this.user.telefone = data.telefone;
                _this.user.celular = data.celular;
                _this.user.email = data.email;
                _this.user.endereco = data.endereco;
                _this.update = true;
            }
            else {
                _this.update = false;
                _this.user.nome = '';
                _this.user.telefone = '';
                _this.user.celular = '';
                _this.user.email = '';
                _this.user.endereco = '';
            }
        });
    };
    FormDadosClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-dados-cliente',
            template: __webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FormDadosClienteComponent);
    return FormDadosClienteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/header-toolbar/header-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"row my-toolbar\" >\r\n\r\n\t<img routerLink=\"/acompanhamento\" class=\"my-logo\" fxFlexOffset=\"5\" src=\"assets/images/logo-name75.png\">\r\n\r\n\t<span (click)=\"toggle_class(0)\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[0] }\" routerLink=\"/cadastro-cliente\"  fxFlexOffset=\"14\" fxFlex = \"10\" > Orçamento </span>\r\n\r\n\t<span (click)=\"toggle_class(1)\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[1] }\"  routerLink=\"/acompanhamento\" fxFlex = \"12\" class=\"my-menus\"> Acompanhamento </span>\r\n\r\n\t<span (click)=\"toggle_class(2)\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[2] }\" routerLink=\"/historico\" fxFlex = \"10\" class=\"my-menus\"> Histórico </span>\r\n\r\n\t<!-- <img class=\"my-user\" fxFlexOffset=\"19\" src=\"assets/images/user-symbol.png\" style=\"cursor: pointer;\"> -->\r\n\r\n\t<button mat-icon-button fxFlexOffset=\"19\" [matMenuTriggerFor]=\"menu\">\r\n\t <img class=\"my-user\"  src=\"assets/images/user-symbol.png\" style=\"cursor: pointer;\">\r\n\t</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button (click)=\"logout()\" mat-menu-item>\r\n    <span >Sair</span>\r\n  </button>\r\n</mat-menu>\r\n\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/pages/header-toolbar/header-toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-toolbar {\n  background: white;\n  border: 0px;\n  border-bottom: 1px;\n  border-style: solid;\n  border-color: #E2E2E2;\n  height: 100%; }\n\n.mat-form-field-flex {\n  background: yellow;\n  color: yellow;\n  display: block; }\n\n.my-logo {\n  cursor: pointer;\n  outline: none; }\n\n.my-user {\n  cursor: pointer; }\n\n.my-menus {\n  border: 0px;\n  border-top: 5px;\n  border-color: white;\n  border-style: solid;\n  font-size: 14px;\n  text-align: center;\n  line-height: 48px;\n  cursor: pointer; }\n\n.my-menus:hover {\n  color: #FF8405; }\n\nspan {\n  margin: 0px;\n  border: 0px;\n  outline: none; }\n\n.my-menus-activated {\n  border-color: #FF8405;\n  color: #FF8405; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/header-toolbar/header-toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderToolbarComponent = (function () {
    function HeaderToolbarComponent(http) {
        this.http = http;
        this.menus = [false, false, false];
        this.menuActive = this.getCookie("menuActive");
        this.menus[this.menuActive] = true;
        //console.log(route._routerState.snapshot.url);
    }
    HeaderToolbarComponent.prototype.ngOnInit = function () {
    };
    HeaderToolbarComponent.prototype.logout = function () {
        var req = this.http.post('http://localhost:3000/logout', true)
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-toolbar',
            template: __webpack_require__("../../../../../src/app/pages/header-toolbar/header-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/header-toolbar/header-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HeaderToolbarComponent);
    return HeaderToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/historico/historico.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-toolbar></app-header-toolbar>\r\n<div style=\"width: 100vw; height: 90vh; background: rgba(235,233,234, 0.3);\">\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar resultados\">\r\n    </mat-form-field>\r\n        <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar resultados\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\">\r\n    \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> CPF </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.id}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"cliente\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\" > Clientes </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.cliente}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"telefone\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Telefone </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.telefone}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Status </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.status}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Faturamento column -->\r\n    <ng-container matColumnDef=\"faturamento\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Faturamento </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.faturamento  | date: 'dd/MM/yyyy'}}  </mat-cell>\r\n    </ng-container>\r\n\r\n        <!-- Faturamento column -->\r\n    <ng-container matColumnDef=\"preco\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Preço </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.preco }}  </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/historico/historico.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n  background: rgba(235, 233, 234, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/historico/historico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoricoComponent = (function () {
    function HistoricoComponent() {
        this.ELEMENT_DATA = [
            { id: 1, cliente: 'Gustavo Morais', telefone: 41997919187, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00"), faturamentoString: '', preco: 999 },
            { id: 2, cliente: 'Morais Gustavo', telefone: 41997919186, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33"), faturamentoString: '', preco: 450 },
            { id: 1, cliente: 'Gustavo Morais', telefone: 41997919185, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00"), faturamentoString: '', preco: 999 },
            { id: 2, cliente: 'Morais Gustavo', telefone: 41997919187, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33"), faturamentoString: '', preco: 450 },
            { id: 1, cliente: 'Gustavo Morais', telefone: 41997919187, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00"), faturamentoString: '', preco: 999 },
            { id: 2, cliente: 'Morais Gustavo', telefone: 41997919187, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33"), faturamentoString: '', preco: 450 },
            { id: 1, cliente: 'Gustavo Morais', telefone: 41997919187, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00"), faturamentoString: '', preco: 999 },
            { id: 2, cliente: 'Morais Gustavo', telefone: 41997919187, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33"), faturamentoString: '', preco: 450 },
        ];
        this.displayedColumns = ['id', 'cliente', 'telefone', 'status', 'faturamento', 'preco'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatTableDataSource */](this.ELEMENT_DATA);
    }
    HistoricoComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.ELEMENT_DATA.length; i++) {
            ELEMENT_DATA_PRECOS.push(((this.ELEMENT_DATA[i].preco) / 100).toFixed(2));
            if (this.ELEMENT_DATA[i].faturamento.getMonth() <= 8) {
                this.ELEMENT_DATA[i].faturamentoString = this.ELEMENT_DATA[i].faturamento.getDate().toString() + "/0" + (this.ELEMENT_DATA[i].faturamento.getMonth() + 1).toString() + "/" + this.ELEMENT_DATA[i].faturamento.getFullYear().toString();
            }
            else {
                this.ELEMENT_DATA[i].faturamentoString = this.ELEMENT_DATA[i].faturamento.getDate().toString() + "/" + (this.ELEMENT_DATA[i].faturamento.getMonth() + 1).toString() + "/" + this.ELEMENT_DATA[i].faturamento.getFullYear().toString();
            }
        }
    };
    HistoricoComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    HistoricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-historico',
            template: __webpack_require__("../../../../../src/app/pages/historico/historico.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/historico/historico.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoricoComponent);
    return HistoricoComponent;
}());

var ELEMENT_DATA_PRECOS = [];


/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" >\r\n\r\n <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100vh;\">\r\n\r\n  <div class=\"login-img\" fxFlex=\"39\">\r\n   <img routerLink=\"/acompanhamento\" class=\"my-log-img\" src=\"../assets/images/login_1.png\">\r\n </div>\r\n\r\n <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"61\">        \r\n\r\n  <div style=\"width: 17%;\">\r\n   <img routerLink=\"/acompanhamento\" class=\"my-logo\" src=\"../assets/images/logo-login.png\">\r\n </div>\r\n\r\n <mat-form-field fxFlexOffset=\"5\" class=\"my-inputs\">\r\n  <input [(ngModel)] = \"user\" matInput name=\"user\" placeholder=\"Insira seu email\" >\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"my-inputs\">\r\n  <input  [(ngModel)] = \"pass\" matInput name=\"pass\" placeholder=\"Senha\" >\r\n</mat-form-field>\r\n\r\n<button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"login(loginForm)\" >ENTRAR</button>\r\n<button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"signup(loginForm)\"> CADASTRAR</button>\r\n<button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"teste()\"> GET HTML</button>\r\n<button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"getHeader()\"> GET HEADER</button>\r\n\r\n<!-- <my-button-orange fxFlexOffset=\"2\" label=\"ENTRAR\" class=\"enter-button\" (click)=\"login(loginForm)\"></my-button-orange>\r\n<my-button-orange fxFlexOffset=\"2\" label=\"CADASTRAR\" class=\"enter-button\" (click)=\"signup(loginForm)\"></my-button-orange>\r\n\r\n<my-button-orange fxFlexOffset=\"2\" label=\"GET HTML\" class=\"enter-button\" (click)=\"teste()\"></my-button-orange>\r\n\r\n<my-button-orange fxFlexOffset=\"2\" label=\"Header\" class=\"enter-button\" (click)=\"getHeader()\"></my-button-orange> -->\r\n\r\n<span routerLink=\"/esqueci-senha\" fxFlexOffset=\"7\" class=\"forgot-password\">Esqueceu sua senha?</span>\r\n</div> \r\n\r\n</div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\n  margin: 0px;\n  background: black; }\n\n.my-log-img {\n  width: 100%;\n  height: 100%; }\n\n.my-logo {\n  width: 100%;\n  height: 100%; }\n\n.my-inputs {\n  width: 50%; }\n\n.enter-button {\n  width: 50%; }\n\n.forgot-password {\n  font-size: 13px;\n  color: #B5B5B5;\n  cursor: pointer; }\n\n.my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 50%;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.http = http;
        this.router = router;
        this.response = false;
        this.test = false;
    }
    LoginComponent.prototype.canActivate = function (route, state) {
        console.log("this response " + this.response);
        console.log("this test " + this.test);
        if (this.response == true) {
            // logged in so return true
            return true;
        }
        else {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/historico']);
            return false;
        }
    };
    LoginComponent.prototype.signup = function (loginForm) {
        var req = this.http.post('http://localhost:3000/signup', loginForm.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        var req = this.http.post('http://localhost:3000/log', loginForm.value)
            .subscribe(function (res) {
            console.log(res);
            console.log("im here");
            _this.response = true;
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent.prototype.teste = function () {
        var req = this.http.get('http://localhost:3000/log')
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent.prototype.getHeader = function () {
        var req = this.http.get('http://localhost:3000/header')
            .subscribe(function (res) {
            console.log(res);
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map