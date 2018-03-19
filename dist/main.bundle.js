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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro_component__ = __webpack_require__("../../../../../src/app/pages/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_components_guard_auth_guard__ = __webpack_require__("../../../../../src/app/common_components/_guard/auth.guard.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_2__pages_form_dados_cliente_form_dados_cliente_component__["a" /* FormDadosClienteComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */]]
    },
    {
        path: 'acompanhamento',
        component: __WEBPACK_IMPORTED_MODULE_3__pages_acompanhamento_acompanhamento_component__["a" /* AcompanhamentoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */]]
    },
    {
        path: 'historico',
        component: __WEBPACK_IMPORTED_MODULE_4__pages_historico_historico_component__["b" /* HistoricoComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__common_components_guard_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'cadastro',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_cadastro_cadastro_component__["a" /* CadastroComponent */]
    },
    {
        path: 'esqueci-senha',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__common_components_guard_auth_guard__["a" /* AuthGuard */]]
    },
    { path: '**', redirectTo: '/acompanhamento', pathMatch: 'full' },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__common_components_my_input_text_my_input_text_component__ = __webpack_require__("../../../../../src/app/common_components/my-input-text/my-input-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_components_card_card_component__ = __webpack_require__("../../../../../src/app/common_components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_components_list_list_component__ = __webpack_require__("../../../../../src/app/common_components/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__common_components_my_button_my_button_component__ = __webpack_require__("../../../../../src/app/common_components/my-button/my-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_components_my_button_bw_my_button_bw_component__ = __webpack_require__("../../../../../src/app/common_components/my-button-bw/my-button-bw.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__common_components_my_input_select_my_input_select_component__ = __webpack_require__("../../../../../src/app/common_components/my-input-select/my-input-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__common_components_my_form_header_my_form_header_component__ = __webpack_require__("../../../../../src/app/common_components/my-form-header/my-form-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_form_dados_cliente_form_dados_cliente_component__ = __webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_header_toolbar_header_toolbar_component__ = __webpack_require__("../../../../../src/app/pages/header-toolbar/header-toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__ = __webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_historico_historico_component__ = __webpack_require__("../../../../../src/app/pages/historico/historico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro_component__ = __webpack_require__("../../../../../src/app/pages/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__common_components_guard_auth_guard__ = __webpack_require__("../../../../../src/app/common_components/_guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_orca_data_service__ = __webpack_require__("../../../../../src/app/services/orca-data.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_18__common_components_my_input_text_my_input_text_component__["a" /* MyInputTextComponent */],
                __WEBPACK_IMPORTED_MODULE_21__common_components_my_button_my_button_component__["a" /* MyButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_22__common_components_my_button_bw_my_button_bw_component__["a" /* MyButtonBwComponent */],
                __WEBPACK_IMPORTED_MODULE_19__common_components_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__common_components_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_23__common_components_my_input_select_my_input_select_component__["a" /* MyInputSelectComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_form_dados_cliente_form_dados_cliente_component__["a" /* FormDadosClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_24__common_components_my_form_header_my_form_header_component__["a" /* MyFormHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_header_toolbar_header_toolbar_component__["a" /* HeaderToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__["a" /* AcompanhamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_historico_historico_component__["b" /* HistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__["c" /* ClienteAtenderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__["b" /* AtendimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_historico_historico_component__["a" /* HistoricPopupComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro_component__["a" /* CadastroComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_26__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_13_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["j" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["g" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_27__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatIconModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__["a" /* AcompanhamentoComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__["c" /* ClienteAtenderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_acompanhamento_acompanhamento_component__["b" /* AtendimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro_component__["a" /* CadastroComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_historico_historico_component__["b" /* HistoricoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_historico_historico_component__["a" /* HistoricPopupComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro_component__["a" /* CadastroComponent */],
                __WEBPACK_IMPORTED_MODULE_34__common_components_guard_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_35__services_orca_data_service__["a" /* OrcaDataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common_components/_guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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



var AuthGuard = (function () {
    function AuthGuard(router, _location) {
        this.router = router;
        this._location = _location;
        /*      this.response = false;*/
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.getCookie("dcJJe4ZEsB") != "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb") {
            return true;
        }
        else {
            this.router.navigate(['/acompanhamento']);
            console.log("going to acomp");
            //this._location.back();
            return false;
        }
    };
    AuthGuard.prototype.getCookie = function (cname) {
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
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], AuthGuard);
    return AuthGuard;
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

module.exports = "<div class=\"card\" draggable=\"true\"  (dragstart)=\"dragStart($event)\" id=\"{{card.id}}\">\r\n\r\n<div id=\"{{card.id}}\" >\r\n\t<span ><b id=\"{{card.id}}\" >   {{card.id}} {{reducedID}} - </b></span>\r\n\r\n\t<span id=\"{{card.id}}\">  <!-- {{card.id}} --> {{card.nome}}</span>\r\n\r\n<!-- \t<span  class=\"my-card-des\"><b id=\"{{card.id}}\" >{{card.estado}}</b></span> -->\r\n</div>\r\n\r\n<div id=\"{{card.id}}\">\r\n\t<span id=\"{{card.id}}\" >Tel.</span>\r\n\t<span class=\"my-card-des\" > <b id=\"{{card.id}}\" > <span id=\"{{card.id}}\" style=\"color: rgb(51, 97, 134);\">{{card.telPrimario}}</span> - {{card.dia}}/{{card.mes}}  | {{card.periodo}} </b></span>\r\n</div>\r\n\r\n<span id=\"{{card.id}}\" >{{card.endereco}}</span>\r\n\r\n</div>"

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
        console.log(this.card);
        this.reducedID = this.card.ordServ.substring(17, 24);
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
exports.push([module.i, ".list {\r\n  height: 87vh;\r\n  overflow: auto;\r\n}\r\n\r\n.list_border{\r\n      background: rgba(215,213,214, 0.6);\r\n    width: 18.7vw;\r\n    padding: 4px;\r\n    margin: 4px;\r\n    margin-top: 30px;\r\n    display: inline-block;\r\n    border-radius: 8px;\r\n\r\n}\r\n\r\n.list__title {\r\n    margin: 0;\r\n    padding-top: 15px;\r\n    cursor: context-menu; \r\n    padding-left: 8px;\r\n    padding-bottom: 11px;\r\n    font-size: 14px;\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.list a {\r\n    width: 100%;\r\n    display: block;\r\n    text-decoration: none;\r\n}\r\n \r\ninput{\r\n  width: 248px;\r\n  padding: 5px;\r\n  border: 2px solid orange;\r\n  outline: 0;\r\n  background: #fff;\r\n  box-shadow:none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/common_components/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list\" (dragover)=\"allowDrop($event)\" (drop)=\"drop($event)\" id=\"{{list.id}}\">\r\n\t<div class=\"list_border\">\r\n\r\n  <p class=\"list__title\"><strong>  <!-- {{list.id}} --> {{list.name}} </strong></p>\r\n\r\n  <div (dragover)=\"allowDrop($event)\" class=\"cards\">\r\n    <app-card (dragstart)=\"dragStart($event)\" (dragover)=\"allowDrop($event)\" *ngFor=\"let cardId of list.cards\" [card]=\"cardStore.getCard(cardId)\"></app-card>\r\n  </div>\r\n\r\n</div>\r\n</div>"

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
        this.lastId = 0;
    }
    CardStore.prototype.getCard = function (cardId) {
        return this.cards[parseInt(cardId)];
    };
    CardStore.prototype.findCard = function (bdId) {
        for (var i = 0; i < this.lastId; i++) {
            if (this.cards[i].bd_id == bdId) {
                return { exists: true, id: this.cards[i].id };
            }
        }
        return { exists: false, id: -1 };
    };
    CardStore.prototype.updateCard = function (cardId, card) {
        //console.log("update" + this.cards[parseInt(cardId)].defeito);
        var cardID = parseInt(cardId);
        this.cards[cardID].estado = card.estado;
        this.cards[cardID].bd_id = card.bd_id;
        this.cards[cardID].defeito = card.defeito;
        this.cards[cardID].nome = card.nome;
        this.cards[cardID].telPrimario = card.telPrimario;
        this.cards[cardID].data = card.data;
        this.cards[cardID].dia = card.data.getDate();
        this.cards[cardID].mes = card.data.getMonth() + 1;
        this.cards[cardID].imei = card.imei;
        this.cards[cardID].endereco = card.endereco;
        this.cards[cardID].marca = card.marca;
        this.cards[cardID].modelo = card.modelo;
        this.cards[cardID].telSecundario = card.telSecundario;
        this.cards[cardID].email = card.email;
        this.cards[cardID].realizado = card.realizado;
        this.cards[cardID].pecas = card.pecas;
        this.cards[cardID].servico = card.servico;
        this.cards[cardID].maoObra = card.maoObra;
        this.cards[cardID].valorFinal = card.valorFinal;
        this.cards[cardID].metPag = card.metPag;
        this.cards[cardID].observacoes = card.observacoes;
    };
    CardStore.prototype._addCard = function (card) {
        card.id = String(this.lastId++);
        this.cards[card.id] = card;
        return card.id;
    };
    CardStore.prototype.newCard = function (estado, cpf, id, defeito, nome, telPrimario, data, imei, endereco, marca, modelo, telSecundario, email, realizado, pecas, servico, maoObra, valorFinal, metPag, observacoes, ordServ) {
        var card = new __WEBPACK_IMPORTED_MODULE_0__cardSchema__["a" /* CardSchema */]();
        card.estado = estado;
        card.cpf = cpf;
        card.bd_id = id;
        card.defeito = defeito;
        card.nome = nome;
        card.telPrimario = telPrimario;
        card.data = data;
        card.dia = data.getDate();
        card.mes = data.getMonth() + 1;
        card.imei = imei;
        card.endereco = endereco;
        card.marca = marca;
        card.modelo = modelo;
        card.telSecundario = telSecundario;
        card.email = email;
        card.realizado = realizado;
        card.pecas = pecas;
        card.servico = servico;
        card.maoObra = maoObra;
        card.valorFinal = valorFinal;
        card.metPag = metPag;
        card.observacoes = observacoes;
        card.ordServ = ordServ;
        return (this._addCard(card));
    };
    CardStore.prototype.removeCard = function (cardId) {
        for (var i = 0; i < this.lastId; i++) {
            if (this.cards[i].id == cardId) {
                for (var j = i; j < this.lastId - 1; j++) {
                    this.cards[j] = this.cards[j + 1];
                }
                delete this.cards[this.lastId];
                this.lastId--;
                return true;
            }
        }
        return false;
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

module.exports = "<app-header-toolbar></app-header-toolbar>\r\n<div style=\"padding-left: 5px;\">\r\n  <app-list (click)=\"clicked($event)\" (drop)=\"drop($event)\" *ngFor=\"let list of lists\" [list]=\"list\" [cardStore]=\"cardStore\"></app-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/acompanhamento.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0px 30px;\n  width: 100%;\n  height: 100%; }\n\napp-list {\n  background: rgba(235, 233, 234, 0.3);\n  background-opacity: 0.18; }\n\n.mat-dialog-container {\n  background: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/acompanhamento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ClienteAtenderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AtendimentoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcompanhamentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_orca_data_service__ = __webpack_require__("../../../../../src/app/services/orca-data.service.ts");
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
        this.periodos = [{ value: 'Manhã' }, { value: 'Tarde' }];
        this.reducedID = this.data.ordServ.substring(17, 24);
    }
    ClienteAtenderComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ClienteAtenderComponent.prototype.ngOnInit = function () {
    };
    ClienteAtenderComponent.prototype.thermalPrintVisao = function () {
        var w = window.open();
        w.document.write("Pagina de visao do tecnicoaa <br> " + this.data.defeito);
        w.print();
        w.close();
    };
    ;
    ClienteAtenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cliente-atender',
            template: __webpack_require__("../../../../../src/app/pages/acompanhamento/cliente-atender/cliente-atender.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/acompanhamento/cliente-atender/cliente-atender.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogRef */], Object])
    ], ClienteAtenderComponent);
    return ClienteAtenderComponent;
}());

var AtendimentoComponent = (function () {
    function AtendimentoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.periodos = [
            { value: 'Débito' },
            { value: 'Crédito' },
            { value: 'Cheque' },
            { value: 'Dinheiro' },
        ];
        this.options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        this.reducedID = this.data.ordServ.substring(17, 24);
    }
    AtendimentoComponent.prototype.sumTotalValue = function () {
        var value1, value2;
        if (this.data.servico != null)
            value1 = (this.data.servico).replace(",", ".");
        else
            value1 = 0;
        if (this.data.pecas != null)
            value2 = (this.data.pecas).replace(",", ".");
        else
            value2 = 0;
        this.data.valorFinal = Number(value1) + Number(value2);
    };
    AtendimentoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AtendimentoComponent.prototype.thermalPrintAguardando = function () {
        var document = '<html>\
    <div style="width: 235px; word-wrap: break-word;">\
    <body onload="window.print()"> <h4 style="display: inline-block" >Ordem de serviço</h4> <img style="display: inline-block; padding-left: 10px;" src="assets/images/logo-nameOS.png"> <br>\
    <span style="font-size: 12px;"> <strong> N° Ordem: </strong>' + this.reducedID + ' </span> <br> \
    <span style="font-size: 12px;"><strong>Data:</strong> ' + this.data.data.toLocaleDateString("pt-BR", this.options) + '</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span style="font-size: 12px;"> <strong> Cliente:</strong> ' + this.data.nome + '</span> <br>\
    <span><strong>Telefone:</strong> ' + this.data.telPrimario + '</span> <br> \
    <span style="font-size: 12px;"> <strong> Email:</strong> ' + this.data.email + '</span> <br>\
    <span style="font-size: 12px;">_______________________________________<br>\
    <span style="font-size: 12px;"> <strong> Marca/modelo:</strong> ' + this.data.marca + '</span> <span style="font-size: 12px;">' + this.data.modelo + '</span> <br>\
    <span><strong>Imei:</strong> ' + this.data.imei + '</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Observações/Senha:</strong></span> <br> \
    <div style="width: 135px; display: inline-block;"> \
    <span>' + this.data.observacoes + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + '\
    </div> \
    <div style="width: 90px; display: inline-block; background: green;">\
    <img style="display: inline-block;" src="assets/images/lockscreen.png">\
    </div> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Problema relatado:</strong> ' + this.data.defeito + '</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Serviços realizados:</strong> ' + this.data.realizado + '</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Valor peças:</strong> ' + this.data.pecas + '</span> <br> \
    <span><strong>Valor servico:</strong> ' + this.data.servico + '</span> <br> \
    <span><strong>Técnico Responsável:</strong> ' + this.data.maoObra + '</span> <br> <br> <br>\
    <span style="font-size: 12px; padding-left: 44px;">__________________________<br>\
    <span style="padding-left: 73px;"><strong>Assino e concordo</strong></span> <br> \
    </div> ';
        console.log(this.data);
        var w = window.open("");
        w.document.write(document);
        //w.print();    
    };
    ;
    //<span> <strong> Observações/senha: </strong>'+ this.data.observacoes + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +'</span>\
    //    <span style><strong>Observações/senha: </strong> '+ this.data.observacoes + '</span> <span style="float: right;"> __________________________ </span> </body> </html>';
    AtendimentoComponent.prototype.ngOnInit = function () {
    };
    AtendimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-atendimento',
            template: __webpack_require__("../../../../../src/app/pages/acompanhamento/atendimento/atendimento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/acompanhamento/atendimento/atendimento.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogRef */], Object])
    ], AtendimentoComponent);
    return AtendimentoComponent;
}());

var AcompanhamentoComponent = (function () {
    function AcompanhamentoComponent(http, dialog, ordaDataService) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.ordaDataService = ordaDataService;
        //url = "http://localhost";
        //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
        this.url = "http://myas.com.br";
        //List names for the backend requests be directly to the right collection
        this.listsNames = ["orca", "atendimento", "agPecas", "rtVisita", "pagamento", "finalizado"];
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
        this.ordaDataService.getOrcasList().subscribe(function (lists) { return _this.lists = lists; });
        this.ordaDataService.getCardStore().subscribe(function (cardStore) { return _this.cardStore = cardStore; });
    }
    AcompanhamentoComponent.prototype.ngOnInit = function () {
    };
    AcompanhamentoComponent.prototype.clickOrcamento = function (idCard, idList) {
        var _this = this;
        var card = this.cardStore.getCard(idCard);
        console.log(card);
        var dialogRef = this.dialog.open(ClienteAtenderComponent, {
            width: '44vw',
            data: card
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log('The dialog was closed' + result.defeito );
            //Dando ruim com alterações consecutivas
            if (result != null) {
                result.bd_id = card.bd_id;
                card.defeito = result.defeito;
                card.marca = result.marca;
                card.modelo = result.modelo;
                card.data = result.data;
                card.periodo = result.periodo;
                card.observacoes = result.observacoes;
                _this.cardStore.updateCard(idCard, card);
                var req = _this.http.post(_this.url + '/api/update_' + _this.listsNames[idList], result)
                    .subscribe(function (res) {
                    console.log("");
                }, function (err) {
                    console.log("Error occured: " + err.error.message);
                });
            }
        });
    };
    AcompanhamentoComponent.prototype.clickVisited = function (idCard, idList) {
        var _this = this;
        //Get the card with the card id
        var card = this.cardStore.getCard(idCard);
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        console.log("meu card:" + card.modelo);
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list
                //Associando as propriedades para enviar o json certinho
                result.bd_id = card.bd_id;
                card.defeito = result.defeito;
                card.marca = result.marca;
                card.modelo = result.modelo;
                card.realizado = result.realizado;
                card.pecas = result.pecas;
                card.servico = result.servico;
                card.maoObra = result.maoObra;
                card.valorFinal = result.valorFinal;
                card.metPag = result.metPag;
                card.observacoes = result.observacoes;
                //Atualizando o card na store com as novas informações dele
                _this.cardStore.updateCard(idCard, card);
                //Send the req to the backend to update the orca
                var req = _this.http.post(_this.url + '/api/update_' + _this.listsNames[idList], result)
                    .subscribe(function (res) {
                    console.log("");
                }, function (err) {
                    console.log("Error occured: " + err.error.message);
                });
            }
        });
    };
    AcompanhamentoComponent.prototype.openDialogAtender = function (cardID) {
        var _this = this;
        //Get the card with the card id
        var card = this.cardStore.getCard(cardID);
        if (card == undefined) {
            console.log("Problamas ao obter o card.");
            return;
        }
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(ClienteAtenderComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Associando as propriedades para enviar o json certinho
                result.bd_id = card.bd_id;
                card.ordServ = card.bd_id;
                card.observacoes = result.observacoes;
                card.defeito = result.defeito;
                card.marca = result.marca;
                card.modelo = result.modelo;
                card.data = result.data;
                card.periodo = result.periodo;
                //Atualizando o card na store com as novas informações dele
                if (!_this.ordaDataService.addAndRemove('/api/add_atendimento', '/api/remove_orca', card)) {
                    console.log("Ocorreu um erro na função addAndRemove!");
                }
            }
        });
    };
    AcompanhamentoComponent.prototype.openDialogFinalizado = function (cardID) {
        var _this = this;
        //Get the card with the card id
        var card = this.cardStore.getCard(cardID);
        if (card == undefined) {
            console.log("Problamas ao obter o card.");
            return;
        }
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Associando as propriedades para enviar o json certinho
                card.defeito = result.defeito;
                card.marca = result.marca;
                card.modelo = result.modelo;
                card.realizado = result.realizado;
                card.pecas = result.pecas;
                card.servico = result.servico;
                card.maoObra = result.maoObra;
                card.valorFinal = result.valorFinal;
                card.metPag = result.metPag;
                var commandRemove = '';
                //Getting the current list of the card
                var currentStatus = _this.ordaDataService.whichList(card.id);
                if (currentStatus.listID == -1 || currentStatus.listID == 0 || currentStatus.listID >= 5) {
                    console.log("Ocorreu um erro ao mover o cartão.");
                    return;
                }
                else {
                    commandRemove = '/api/remove_' + _this.listsNames[currentStatus.listID];
                }
                if (!_this.ordaDataService.addAndRemove('/api/add_finalizado', commandRemove, card)) {
                    console.log("Ocorreu um erro na função addAndRemove.");
                }
            }
        });
    };
    AcompanhamentoComponent.prototype.openDialogrtVisita = function (cardID) {
        var _this = this;
        //Get the card with the card id
        var card = this.cardStore.getCard(cardID);
        if (card == undefined) {
            console.log("Problamas ao obter o card.");
            return;
        }
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Associando as propriedades para enviar o json certinho
                card.realizado = result.realizado;
                card.pecas = result.pecas;
                card.servico = result.servico;
                card.maoObra = result.maoObra;
                card.valorFinal = result.valorFinal;
                card.metPag = result.metPag;
                var commandRemove = '';
                //Getting the current list of the card
                var currentStatus = _this.ordaDataService.whichList(card.id);
                if (currentStatus.listID == -1 || currentStatus.listID == 0 || currentStatus.listID >= 5) {
                    console.log("Ocorreu um erro ao mover o cartão.");
                    return;
                }
                else {
                    commandRemove = '/api/remove_' + _this.listsNames[currentStatus.listID];
                }
                if (!_this.ordaDataService.addAndRemove('/api/add_rtVisita', commandRemove, card)) {
                    console.log("Ocorreu um erro na função addAndRemove.");
                }
            }
        });
    };
    AcompanhamentoComponent.prototype.openDialogagPecas = function (cardID) {
        var _this = this;
        //Get the card with the card id
        var card = this.cardStore.getCard(cardID);
        if (card == undefined) {
            console.log("Problamas ao obter o card.");
            return;
        }
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Associando as propriedades para enviar o json certinho
                card.realizado = result.realizado;
                card.pecas = result.pecas;
                card.servico = result.servico;
                card.maoObra = result.maoObra;
                card.valorFinal = result.valorFinal;
                card.metPag = result.metPag;
                var commandRemove = '';
                //Getting the current list of the card
                var currentStatus = _this.ordaDataService.whichList(card.id);
                if (currentStatus.listID == -1 || currentStatus.listID == 0 || currentStatus.listID >= 5) {
                    console.log("Ocorreu um erro ao mover o cartão.");
                    return;
                }
                else {
                    commandRemove = '/api/remove_' + _this.listsNames[currentStatus.listID];
                }
                if (!_this.ordaDataService.addAndRemove('/api/add_agPecas', commandRemove, card)) {
                    console.log("Ocorreu um erro na função addAndRemove.");
                }
            }
        });
    };
    AcompanhamentoComponent.prototype.openDialogPagamento = function (cardID) {
        var _this = this;
        //Get the card with the card id
        var card = this.cardStore.getCard(cardID);
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Associando as propriedades para enviar o json certinho
                card.realizado = result.realizado;
                card.pecas = result.pecas;
                card.servico = result.servico;
                card.maoObra = result.maoObra;
                card.valorFinal = result.valorFinal;
                card.metPag = result.metPag;
                var commandRemove = '';
                //Getting the current list of the card
                var currentStatus = _this.ordaDataService.whichList(card.id);
                if (currentStatus.listID == -1 || currentStatus.listID == 0 || currentStatus.listID >= 5) {
                    console.log("Ocorreu um erro ao mover o cartão.");
                    return;
                }
                else {
                    commandRemove = '/api/remove_' + _this.listsNames[currentStatus.listID];
                }
                if (!_this.ordaDataService.addAndRemove('/api/add_pagamento', commandRemove, card)) {
                    console.log("Ocorreu um erro na função addAndRemove.");
                }
            }
        });
    };
    AcompanhamentoComponent.prototype.clicked = function (event) {
        var target = event.target;
        //If the clicked element is not a card, return and dont pop up anything
        if (!Number.isInteger(parseInt(event.target.id))) {
            return;
        }
        //Loop trought the parent html element until get to the list it was dropped on
        while (target.className !== 'list') {
            target = target.parentNode;
        }
        //The list ID, the one that the card is being clicked
        var listID = parseInt(target.id.substring(1, 2));
        //Checking if is the "finalizado" column so a pop up wont be oppened
        if (listID == 5) {
            return;
        }
        if (listID == 0 || listID == 1) {
            this.clickOrcamento(event.target.id, listID);
        }
        else {
            this.clickVisited(event.target.id, listID);
        }
    };
    AcompanhamentoComponent.prototype.drop = function ($event) {
        //The target element that the card was dropped on
        var target = $event.target;
        //Get from the the dom transfer the id of the card that was transfered and the list it came from
        var cardNlist = $event.dataTransfer.getData('text');
        //Loop trought the parent html element until get to the list it was dropped on
        while (target.className !== 'list') {
            target = target.parentNode;
        }
        //Old list ID, the one it came from
        var oldList = parseInt(cardNlist.substring(1, 2));
        //New list ID, the one that the card is being dropped
        var newList = parseInt(target.id.substring(1, 2));
        //The card that is being dropped id from the cardStore
        var cardID = cardNlist.substring(2, cardNlist.length);
        //If the list the card is being dropped is the same if came from just return and do nothing
        if (oldList == newList) {
            return;
        }
        //If the list is dropped from the first list to the second
        if (oldList == 0 && newList == 1) {
            this.openDialogAtender(cardID);
        }
        //If the list is dropped from the second list to the third
        if (oldList == 1 && newList == 2) {
            console.log("zb");
            this.openDialogagPecas(cardID);
        }
        //If the list is dropped from the second list to the third
        if (oldList == 1 && newList == 3) {
            console.log("zc");
            this.openDialogrtVisita(cardID);
        }
        //If the list is dropped from the second list to the third
        if (oldList == 2 && newList == 3) {
            console.log("zd");
            this.openDialogrtVisita(cardID);
        }
        //If the list is dropped from the second list to the third
        if ((oldList == 1 || oldList == 2 || oldList == 3) && newList == 4) {
            console.log("ze");
            this.openDialogPagamento(cardID);
        }
        //If the list is dropped from the second list to the third
        if ((oldList == 1 || oldList == 2 || oldList == 3 || oldList == 4) && newList == 5) {
            console.log("zf");
            this.openDialogFinalizado(cardID);
        }
    };
    AcompanhamentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-acompanhamento',
            template: __webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/acompanhamento/acompanhamento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_orca_data_service__["a" /* OrcaDataService */]])
    ], AcompanhamentoComponent);
    return AcompanhamentoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/atendimento/atendimento.component.html":
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel=\"stylesheet\">\r\n\r\n<div class=\"column\" class=\"popup\"> \r\n\t<div class = \"row\">\r\n\t\t<h1 mat-dialog-title fxFlex=\"70\">Informações do Orçamento - {{reducedID}}</h1>\r\n\t\t<button fxFlexOffset=\"24\" mat-icon-button (click)=\"thermalPrintAguardando()\">\r\n\t\t\t<mat-icon>print</mat-icon>\r\n\r\n\r\n\t\t</button>\r\n\t</div>\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"100\">\r\n            <input [(ngModel)]=\"data.defeito\" matInput ngDefaultControl placeholder=\"Qual defeito apresentado?\">\r\n          </mat-form-field> \r\n      \t</div>\r\n\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.marca\" matInput ngDefaultControl placeholder=\"Marca\">\r\n          </mat-form-field> \r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.modelo\" matInput ngDefaultControl placeholder=\"Modelo\">\r\n          </mat-form-field> \r\n\r\n\t    </div> \r\n\r\n      <div class=\"row\">\r\n           <mat-form-field fxFlexOffset=\"0\" fxFlex=\"100\">\r\n            <input [(ngModel)]=\"data.realizado\" matInput ngDefaultControl placeholder=\"O que foi realizado?\">\r\n          </mat-form-field> \r\n      </div>\r\n\r\n              <div class=\"row\">\r\n           <mat-form-field fxFlexOffset=\"0\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.pecas\" matInput ngDefaultControl placeholder=\"Valor peças\" (blur)=\"this.sumTotalValue()\">\r\n          </mat-form-field> \r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.servico\" matInput ngDefaultControl placeholder=\"Valor servico\" (blur)=\"this.sumTotalValue()\">\r\n          </mat-form-field> \r\n\r\n      </div> \r\n\r\n              <div class=\"row\">\r\n           <mat-form-field fxFlexOffset=\"0\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.maoObra\" matInput ngDefaultControl placeholder=\"Técnico\">\r\n          </mat-form-field> \r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.valorFinal\" matInput ngDefaultControl placeholder=\"Valor final serviço\">\r\n          </mat-form-field> \r\n\r\n      </div> \r\n\r\n      \t<div class=\"row\">\r\n\r\n           <mat-form-field fxFlex>\r\n              <mat-select \r\n                placeholder=\"Método de pagamento\"\r\n                ngDefaultControl\r\n                [(ngModel)]=\"data.metPag\" \r\n                name=\"periodo\" >\r\n                <mat-option \r\n                  *ngFor=\"let value of periodos\" [value]=\"value.value\" >\r\n                  {{ value.value }}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field> \r\n\r\n<!--           <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.periodo\" matInput ngDefaultControl placeholder=\"Horário de disponibilidade\">\r\n          </mat-form-field>  -->\r\n\r\n\r\n\t    </div>\r\n\r\n            <div class=\"row\">\r\n                    <mat-form-field fxFlexOffset=\"2\" fxFlex>\r\n              <textarea matInput matTextareaAutosize matAutosizeMinRows=\"1\" placeholder=\"Observacoes\"\r\n              name=\"observacoes\"\r\n              ngDefaultControl\r\n              [(ngModel)]=\"data.observacoes\"></textarea>\r\n\r\n            </mat-form-field> \r\n      </div>\r\n      \r\n\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\r\n      \t<my-button-bw (click)=\"onNoClick()\" label=\"CANCELAR\" style=\"margin-top: 12px; margin-right: 5px;\"  >\r\n      \t</my-button-bw>\r\n\r\n\r\n        <button class=\"my-button\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial style=\"margin-top: 12px;\">CONFIRMAR</button>\r\n  \r\n<!--         <my-button-orange [mat-dialog-close]=\"data.animal\"\r\n          fxFlexAlign=\"center\" label=\"CONFIRMAR\" style=\"margin-top: 12px;\">\r\n        </my-button-orange>  -->\r\n      </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/atendimento/atendimento.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 20vw;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/cliente-atender/cliente-atender.component.html":
/***/ (function(module, exports) {

module.exports = "<link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel=\"stylesheet\">\r\n\r\n<div class=\"column\" class=\"popup\"> \r\n  <div class = \"row\">\r\n    <h1 mat-dialog-title fxFlex=\"70\">Informações do Orçamento - {{reducedID}}</h1>\r\n\r\n<!--     <button mat-button fxFlex=\"30\" (click)=\"thermalPrintVisao()>\r\n    <mat-icon>print</mat-icon>\r\n  </button>\r\n -->\r\n    <button fxFlexOffset=\"24\" mat-icon-button (click)=\"thermalPrintVisao()\">\r\n      <mat-icon>print</mat-icon>\r\n    </button>\r\n\r\n  </div>\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"100\">\r\n            <input [(ngModel)]=\"data.defeito\" matInput ngDefaultControl placeholder=\"Qual defeito apresentado?\">\r\n          </mat-form-field> \r\n      \t</div>\r\n\r\n      \t<div class=\"row\">\r\n      \t   <mat-form-field fxFlexOffset=\"0\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.marca\" matInput ngDefaultControl placeholder=\"Marca\">\r\n          </mat-form-field> \r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input  [(ngModel)]=\"data.modelo\" matInput ngDefaultControl placeholder=\"Modelo\">\r\n          </mat-form-field> \r\n\r\n\t    </div>\r\n\r\n<!--  Put the tag inside the input\r\n[disabled]=\"true\" -->\r\n\r\n      \t<div class=\"row\">\r\n\r\n            <mat-form-field \r\n              name=\"data\" \r\n              [(ngModel)]=\"data.data\" \r\n              ngDefaultControl \r\n              fxFlexOffset=\"2\" \r\n              fxFlex=\"49\"\r\n              >\r\n\r\n              <input matInput disabled\r\n              [matDatepicker]=\"picker\" \r\n              name=\"data\"\r\n              [(ngModel)]=\"data.data\" \r\n              placeholder=\"Data de visita\"\r\n              >\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input  [(ngModel)]=\"data.imei\" matInput ngDefaultControl placeholder=\"Imei\">\r\n          </mat-form-field> \r\n\r\n<!--           <mat-form-field fxFlexOffset=\"2\" fxFlex=\"49\">\r\n            <input [(ngModel)]=\"data.periodo\" matInput ngDefaultControl placeholder=\"Horário de disponibilidade\">\r\n          </mat-form-field>  -->\r\n\r\n\r\n\t    </div>\r\n\r\n      <div class=\"row\">\r\n                    <mat-form-field fxFlexOffset=\"2\" fxFlex>\r\n              <textarea matInput matTextareaAutosize matAutosizeMinRows=\"1\" placeholder=\"Observações\"\r\n              name=\"observacoes\"\r\n              ngDefaultControl\r\n              [(ngModel)]=\"data.observacoes\"></textarea>\r\n\r\n            </mat-form-field> \r\n      </div>\r\n\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\r\n      \t<my-button-bw (click)=\"onNoClick()\" label=\"CANCELAR\" style=\"margin-top: 12px; margin-right: 5px;\"  >\r\n      \t</my-button-bw>\r\n\r\n\r\n        <button class=\"my-button\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial style=\"margin-top: 12px;\">CONFIRMAR</button>\r\n  \r\n<!--         <my-button-orange [mat-dialog-close]=\"data.animal\"\r\n          fxFlexAlign=\"center\" label=\"CONFIRMAR\" style=\"margin-top: 12px;\">\r\n        </my-button-orange>  -->\r\n      </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/acompanhamento/cliente-atender/cliente-atender.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 20vw;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cadastro/cadastro.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loadSpinner\" class=\"loading-indicator\">\r\n  <mat-progress-spinner style=\"stroke: black\" mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<form #loginForm=\"ngForm\" >\r\n\r\n <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100vh;\">\r\n\r\n  <div class=\"login-img\" fxFlex=\"39\">\r\n   <img routerLink=\"/acompanhamento\" class=\"my-log-img\" src=\"../assets/images/login_1.png\">\r\n </div>\r\n\r\n <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"61\">        \r\n\r\n  <div style=\"width: 17%;\">\r\n   <img routerLink=\"/acompanhamento\" class=\"my-logo\" src=\"../assets/images/logo-login.png\">\r\n </div>\r\n\r\n <mat-form-field fxFlexOffset=\"5\" class=\"my-inputs\" [hideRequiredMarker]=\"true\">\r\n  <input [(ngModel)] = \"user\" matInput name=\"user\" placeholder=\"Insira seu email\" required>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"my-inputs\" [hideRequiredMarker]=\"true\">\r\n  <input  [(ngModel)] = \"pass\" type=\"password\" matInput name=\"pass\" placeholder=\"Senha\" required>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"my-inputs\" [hideRequiredMarker]=\"true\">\r\n  <input [(ngModel)] = \"assistencia\" matInput name=\"assistencia\" placeholder=\"Assistência\" required>\r\n</mat-form-field>\r\n\r\n\r\n<button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"signup(loginForm)\"> CADASTRAR</button>\r\n\r\n<!-- <button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"getHeader()\"> GET REQ</button>\r\n -->\r\n<span routerLink=\"/esqueci-senha\" fxFlexOffset=\"7\" class=\"forgot-password\">Esqueceu sua senha?</span>\r\n\r\n</div> \r\n\r\n</div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/cadastro/cadastro.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\n  margin: 0px;\n  background: black; }\n\n.my-log-img {\n  width: 100%;\n  height: 100%; }\n\n.my-logo {\n  width: 100%;\n  height: 100%; }\n\n.my-inputs {\n  width: 50%; }\n\n.enter-button {\n  width: 50%; }\n\n.forgot-password {\n  font-size: 13px;\n  color: #B5B5B5;\n  cursor: pointer; }\n\n.my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 50%;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n\n::ng-deep .error-class .mat-simple-snackbar {\n  color: red;\n  font-weight: 600; }\n\n::ng-deep .error-class .mat-simple-snackbar button {\n  color: rgba(190, 190, 190, 0.8); }\n\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: black; }\n\n/* Transparent Overlay */\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cadastro/cadastro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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




var CadastroComponent = (function () {
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
            var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-cadastro',
            template: __webpack_require__("../../../../../src/app/pages/cadastro/cadastro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cadastro/cadastro.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSnackBar */]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = " <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100vh;\">\r\n        \r\n        <div class=\"login-img\" fxFlex=\"39\">\r\n        \t<img routerLink=\"/acompanhamento\" class=\"my-log-img\" src=\"assets/images/login_1.png\">\r\n        </div>\r\n\r\n        \r\n\r\n\t <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"61\">       \r\n\r\n      <div style=\"width: 17%;\">\r\n  \t\t\t<img routerLink=\"/login\" class=\"my-logo\" src=\"assets/images/logo-login.png\">\r\n  \t\t</div>\r\n\r\n\t\t<h4 class=\"my-recover\"> Recuperação senha </h4>\r\n\r\n        <mat-form-field fxFlexOffset=\"0\" class=\"my-inputs\">\r\n              <input matInput name=\"email\" placeholder=\"Insira seu email\" >\r\n        </mat-form-field>\r\n\r\n        <button mat-button class='my-button' fxFlexOffset=\"2\"> RECUPERAR</button>\r\n\r\n        <span routerLink=\"/login\" fxFlexOffset=\"7\" class=\"forgot-password\">Eu sei minha senha!</span>\r\n    </div> \r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\n  margin: 0px;\n  background: black; }\n\n.my-log-img {\n  width: 100%;\n  height: 100%; }\n\n.my-logo {\n  width: 100%;\n  height: 100%; }\n\n.my-inputs {\n  width: 50%; }\n\n.enter-button {\n  width: 50%; }\n\n.forgot-password {\n  font-size: 13px;\n  color: #B5B5B5;\n  cursor: pointer; }\n\n.my-recover {\n  font-size: 19px;\n  font-weight: 300;\n  margin-top: 8.6%;\n  margin-bottom: 2%; }\n\n.my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 50%;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n", ""]);

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

module.exports = "<app-header-toolbar></app-header-toolbar>\r\n<div style=\"width: 100vw; height: 90vh;   overflow: auto; background: rgba(235,233,234, 0.3);\">\r\n  <form [formGroup]=\"form\" >\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex=\"70\">\r\n        <my-form-header label=\"Cadastro Cliente\"></my-form-header>\r\n        <div fxLayout=\"row\" >\r\n          <mat-form-field fxFlex=\"32\">\r\n            <input matInput  \r\n            name=\"cpf\" \r\n            placeholder=\"CPF\" \r\n            formControlName=\"cpf\"\r\n            (blur)=\"checkUser()\" \r\n            [formControl]=\"cpfFormControl\">\r\n            \r\n            <mat-error *ngIf=\"cpfFormControl.hasError('required')\">\r\n                CPF/CNPJ <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n            <mat-error *ngIf=\"cpfFormControl.hasError('cpfcnpjInvalid') && !cpfFormControl.hasError('required')\">\r\n                CPF/CNPJ <strong>inválido</strong>\r\n            </mat-error>\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field fxFlexOffset=\"2\" fxFlex=\"70\">\r\n            <input matInput\r\n            formControlName=\"nome\" \r\n            autocomplete='name'\r\n            name=\"nome\" \r\n            placeholder=\"Nome completo do cliente\" \r\n            [formControl]=\"nomeFormControl\">\r\n          \r\n            <mat-error *ngIf=\"nomeFormControl.hasError('required')\">\r\n                Nome <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n          </mat-form-field>  \r\n        </div>\r\n\r\n        <div fxLayout=\"row\">\r\n          <mat-form-field fxFlex>\r\n            <input matInput \r\n            formControlName=\"telPrimario\"\r\n            name=\"telefone\" \r\n            placeholder=\"Telefone primário\"  \r\n            [formControl]=\"telFormControl\"\r\n            (keyup) = \"typingPhone()\"\r\n             >\r\n            \r\n            <mat-error *ngIf=\"telFormControl.hasError('required')\">\r\n              Telefone Primário é <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n            <mat-error *ngIf=\"telFormControl.hasError('phoneInvalid') &&  !telFormControl.hasError('required')\">\r\n              Telefone Primário <strong>inválido</strong>\r\n            </mat-error>\r\n\r\n          </mat-form-field>\r\n\r\n        <mat-form-field fxFlex fxFlexOffset=\"2\">\r\n            <input matInput \r\n              formControlName=\"telSecundario\"  \r\n              name=\"telSecundario\" \r\n              placeholder=\"Telefone secundário\"\r\n              [formControl]=\"telTwoFormControl\"\r\n              (keyup) = \"typingPhoneTwo()\">\r\n\r\n            <mat-error *ngIf=\"telTwoFormControl.hasError('phoneInvalid')\" >\r\n              Telefone Secundário <strong>inválido</strong>\r\n            </mat-error>\r\n\r\n        </mat-form-field>\r\n\r\n          <mat-form-field fxFlex fxFlexOffset=\"2\">\r\n            <input matInput \r\n            formControlName=\"email\"  \r\n            name=\"email\" \r\n            placeholder=\"Email\" \r\n            [formControl]=\"emailFormControl\">\r\n\r\n            <mat-error *ngIf=\"emailFormControl.hasError('emailInvalid')\">\r\n              Email <strong>inválido</strong>\r\n            </mat-error>\r\n\r\n          </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <div fxLayout=\"row\">\r\n\r\n        <mat-form-field fxFlex [hideRequiredMarker]=\"true\">\r\n            <input matInput\r\n              formControlName=\"endereco\" \r\n              name=\"endereco\" \r\n              placeholder=\"Endereço completo\">\r\n\r\n          <mat-error>\r\n              Endereço é <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </form >\r\n        \r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex=\"70\">\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" *ngIf=((!update)) >\r\n\r\n        <my-button-orange\r\n          (click)=\"userForm()\" \r\n          fxFlexAlign=\"center\" \r\n          label=\"CADASTRAR CLIENTE\" \r\n          style=\"margin-top: 12px;\">\r\n        </my-button-orange>\r\n\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" *ngIf=((update)) >\r\n        <my-button-orange \r\n          fxFlexAlign=\"center\" \r\n          label=\"ATUALIZAR CLIENTE\" \r\n          style=\"margin-top: 12px;\" \r\n          (click)=\"updateUser()\" \r\n          >\r\n        </my-button-orange>\r\n      </div> \r\n    </div>\r\n  </div>\r\n\r\n  <form #orcaCadForm=\"ngForm\" >\r\n    <div class=\"row\" fxLayoutAlign=\"center center\">\r\n      <div fxFlex = \"70\">\r\n        <my-form-header label=\"Informações do Orçamento\"></my-form-header>\r\n          <div class=\"row\" >\r\n\r\n            <mat-form-field fxFlex=\"32\" [hideRequiredMarker]=\"true\">\r\n              <input matInput \r\n              [formControl]=\"cpfOrcaFormControl\"\r\n              name=\"cpf\" \r\n              [(ngModel)]=\"orca.cpf\" \r\n              ngDefaultControl \r\n              placeholder=\"CPF do Cliente\"  \r\n              (blur)=\"checkUserWForm(orcaCadForm)\"\r\n              >\r\n            \r\n            <mat-error *ngIf=\"cpfOrcaFormControl.hasError('required')\">\r\n                CPF/CNPJ <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n            <mat-error *ngIf=\"cpfOrcaFormControl.hasError('cpfcnpjInvalid') && !cpfOrcaFormControl.hasError('required')\">\r\n                CPF/CNPJ <strong>inválido</strong>\r\n            </mat-error>\r\n\r\n            </mat-form-field>\r\n\r\n<!--             <my-input-text fxFlex \r\n              name=\"defeito\" \r\n              [(ngModel)]=\"orca.defeito\" \r\n              ngDefaultControl \r\n              fxFlexOffset=2 \r\n              label=\"Qual o defeito apresentado?\"\r\n              required> \r\n            </my-input-text> -->\r\n\r\n            <mat-form-field fxFlex fxFlexOffset=2 [hideRequiredMarker]=\"true\">\r\n              <input matInput \r\n              name=\"defeito\" \r\n              [(ngModel)]=\"orca.defeito\" \r\n              ngDefaultControl \r\n              placeholder=\"Qual o defeito apresentado\"  \r\n              required>\r\n\r\n            <mat-error>\r\n              Defeito é <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n            </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\" >\r\n\r\n\r\n            <mat-form-field fxFlex=\"32\" [hideRequiredMarker]=\"true\">\r\n              <input matInput \r\n              name=\"marca\" \r\n              [(ngModel)]=\"orca.marca\" \r\n              ngDefaultControl \r\n              placeholder=\"Marca\"  \r\n              required>\r\n\r\n            <mat-error>\r\n              Marca é <strong>obrigatória</strong>\r\n            </mat-error>\r\n\r\n            </mat-form-field>\r\n\r\n\r\n            <mat-form-field fxFlexOffset=\"2\" fxFlex [hideRequiredMarker]=\"true\">\r\n              <input matInput \r\n              name=\"imei\" \r\n              [(ngModel)]=\"orca.imei\" \r\n              ngDefaultControl \r\n              placeholder=\"Imei\"  \r\n              required>\r\n\r\n            <mat-error>\r\n              Imei é <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n            </mat-form-field>\r\n\r\n            <mat-form-field fxFlexOffset=\"2\" fxFlex [hideRequiredMarker]=\"true\">\r\n              <input matInput \r\n              name=\"modelo\" \r\n              [(ngModel)]=\"orca.modelo\" \r\n              ngDefaultControl \r\n              placeholder=\"Modelo\"  \r\n              required>\r\n\r\n            <mat-error>\r\n              Modelo é <strong>obrigatório</strong>\r\n            </mat-error>\r\n\r\n            </mat-form-field>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n\r\n            <mat-form-field fxFlex>\r\n              <textarea matInput matTextareaAutosize matAutosizeMinRows=\"1\" placeholder=\"Observações\"\r\n              name=\"observacoes\"\r\n              [(ngModel)]=\"orca.observacoes\"></textarea>\r\n\r\n            </mat-form-field> \r\n\r\n<!--             <my-input-text \r\n              fxFlex=\"32\" \r\n              name =\"periodo\" \r\n              [(ngModel)] =\"orca.periodo\" \r\n              ngDefaultControl \r\n              label=\"Período de disponibilidade\" \r\n              required> \r\n            </my-input-text> -->\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n  </form> \r\n      \r\n      <div class=\"row\" fxLayoutAlign=\"center center\">\r\n        <div fxFlex = \"70\">\r\n\r\n           <div fxFlex=\"grow\"></div>\r\n           \r\n            <my-button-orange \r\n              fxFlexAlign=\"center\" \r\n              label=\"CONTINUAR ORÇAMENTO\" \r\n              (click)=\"orcaForm(orcaCadForm);\">\r\n                \r\n            </my-button-orange>\r\n        </div>\r\n      </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ::ng-deep snack-bar-container.custom-class {\r\n  background: yellow;\r\n} */\n::ng-deep .custom-class .mat-simple-snackbar {\n  color: rgba(0, 255, 0, 0.8); }\n\n::ng-deep .custom-class .mat-simple-snackbar button {\n  color: rgba(190, 190, 190, 0.8); }\n\n::ng-deep .error-class .mat-simple-snackbar {\n  color: red;\n  font-weight: 600; }\n\n::ng-deep .error-class .mat-simple-snackbar button {\n  color: rgba(190, 190, 190, 0.8); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDadosClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
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




// Importing CPF and CNPJ validators 
var CPF = __webpack_require__("../../../../cpf_cnpj/index.js").CPF;
var CNPJ = __webpack_require__("../../../../cpf_cnpj/index.js").CNPJ;
var FormDadosClienteComponent = (function () {
    function FormDadosClienteComponent(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        //url = "http://localhost:3000";
        //url = "http://localhost";
        //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
        this.url = "http://myas.com.br";
        this.values = [
            { value: '0', viewValue: 'Manhã' },
            { value: '1', viewValue: 'Tarde' },
        ];
        //TEL    Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
        //CEL  Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/),
        //CPF    Validators.pattern(/^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/),
        this.user = { cpf: '', nome: '', telPrimario: '', telSecundario: '', email: '', endereco: '' };
        this.orca = { cpf: '', defeito: '', marca: '', data: null, modelo: '', imei: '', observacoes: '' };
        this.update = false;
        //My validators
        this.nomeFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
        ]);
        this.enderecoFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', []);
        //My validators
        this.cpfFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            this.cpfValidator
        ]);
        //My validators
        this.cpfOrcaFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            this.cpfValidator
        ]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            this.emailValidator
        ]);
        this.telFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            this.phoneValidator
        ]);
        this.telTwoFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            this.phoneValidator
        ]);
        //Declaring the form group to interact with the form
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            cpf: this.cpfFormControl,
            nome: this.nomeFormControl,
            telPrimario: this.telFormControl,
            telSecundario: this.telTwoFormControl,
            email: this.emailFormControl,
            endereco: this.enderecoFormControl,
        });
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
    FormDadosClienteComponent.prototype.ngOnInit = function () {
    };
    FormDadosClienteComponent.prototype.cpfValidator = function (control) {
        var cpforcnpj = control.value;
        if (!(CPF.isValid(cpforcnpj) || CNPJ.isValid(cpforcnpj))) {
            return {
                cpfcnpjInvalid: "Invalid cpf/cnpj"
            };
        }
        return null;
    };
    FormDadosClienteComponent.prototype.emailValidator = function (control) {
        var email = control.value;
        if (control.value == null || control.value == "") {
            return null;
        }
        if (email.length < 3 || email.indexOf("@") == -1) {
            return {
                emailInvalid: "Invalid email"
            };
        }
        return null;
    };
    FormDadosClienteComponent.prototype.phoneValidator = function (control) {
        var phone = control.value;
        if (phone == null || phone == "")
            return null;
        if (phone.substring(0, 1) != "(" || phone.substring(3, 4) != ")" || phone.substring(9, 10) != "-" || phone.length != 14) {
            return {
                phoneInvalid: "Invalid phone"
            };
        }
        return null;
    };
    FormDadosClienteComponent.prototype.typingPhone = function () {
        //Inserting automatically parentesis and - in the phone
        if (this.form.value.telPrimario.length >= 1 && this.form.value.telPrimario.substring(0, 1) != "(") {
            var aux = this.form.value;
            aux.telPrimario = "(" + aux.telPrimario;
            this.form.setValue(aux);
        }
        if (this.form.value.telPrimario.length >= 4 && this.form.value.telPrimario.substring(3, 4) != ")") {
            var aux = this.form.value;
            aux.telPrimario = this.form.value.telPrimario.substring(0, 3) + ")" + this.form.value.telPrimario.substring(3);
            this.form.setValue(aux);
        }
        if (this.form.value.telPrimario.length >= 10 && this.form.value.telPrimario.substring(9, 10) != "-") {
            var aux = this.form.value;
            aux.telPrimario = this.form.value.telPrimario.substring(0, 9) + "-" + this.form.value.telPrimario.substring(9);
            this.form.setValue(aux);
        }
    };
    FormDadosClienteComponent.prototype.typingPhoneTwo = function () {
        //Inserting automatically parentesis and - in the phone
        if (this.form.value.telSecundario.length >= 1 && this.form.value.telSecundario.substring(0, 1) != "(") {
            var aux = this.form.value;
            aux.telSecundario = "(" + aux.telSecundario;
            this.form.setValue(aux);
        }
        if (this.form.value.telSecundario.length >= 4 && this.form.value.telSecundario.substring(3, 4) != ")") {
            var aux = this.form.value;
            aux.telSecundario = this.form.value.telSecundario.substring(0, 3) + ")" + this.form.value.telSecundario.substring(3);
            this.form.setValue(aux);
        }
        if (this.form.value.telSecundario.length >= 10 && this.form.value.telSecundario.substring(9, 10) != "-") {
            var aux = this.form.value;
            aux.telSecundario = this.form.value.telSecundario.substring(0, 9) + "-" + this.form.value.telSecundario.substring(9);
            this.form.setValue(aux);
        }
    };
    FormDadosClienteComponent.prototype.userForm = function () {
        var _this = this;
        console.log('status ' + this.form.status);
        if (this.form.status == "INVALID") {
            this.cpfFormControl.markAsTouched();
            this.nomeFormControl.markAsTouched();
            this.enderecoFormControl.markAsTouched();
            this.emailFormControl.markAsTouched();
            this.telFormControl.markAsTouched();
            this.telTwoFormControl.markAsTouched();
            var config_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
            config_1.extraClasses = ['error-class'];
            config_1.duration = 3000;
            this.snackBar.open("Preencha os campos obrigatórios devidamente", "Fechar", config_1);
            return null;
        }
        /*    if(this.form.value.cpf.length < 1 ||  this.form.value.nome.length < 1  || this.form.value.telPrimario.length < 1  || this.form.value.endereco.length < 1){
              console.log('entrei 2');
              let config = new MatSnackBarConfig();
              config.extraClasses = ['error-class'];
              config.duration = 3000;
              this.snackBar.open("Preencha os campos obrigatórios devidamente", "Fechar", config);
              return null;
            }*/
        console.log('entrei 3');
        var req = this.http.post(this.url + '/api/add_cli', this.form.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
            config.extraClasses = ['custom-class'];
            config.duration = 3000;
            _this.snackBar.open("Erro no cadastro: " + err.error.message, "Fechar", config);
            console.log("Error occured: " + err.error.message);
        });
        this.update = false;
        this.orca.cpf = this.form.value.cpf;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
        config.extraClasses = ['custom-class'];
        config.duration = 3000;
        this.snackBar.open("Cliente Cadastrado com sucesso", "Fechar", config);
        this.form.reset();
    };
    FormDadosClienteComponent.prototype.getValues = function () {
        return this.values;
    };
    FormDadosClienteComponent.prototype.updateUser = function (myForm) {
        var _this = this;
        //cheking if any required field is empty
        if (this.form.status == "INVALID") {
            var config_2 = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
            config_2.extraClasses = ['error-class'];
            config_2.duration = 3000;
            this.snackBar.open("Preencha os campos obrigatórios devidamente", "Fechar", config_2);
            return null;
        }
        console.log(this.form.value);
        var req = this.http.post(this.url + '/api/update_cli', this.form.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
            config.extraClasses = ['error-class'];
            config.duration = 3000;
            _this.snackBar.open("Erro na atualização de cadastro: " + err.error.message, "Fechar", config);
            console.log("Error occured: " + err.error.message);
        });
        this.update = false;
        this.orca.cpf = this.form.value.cpf;
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
        config.extraClasses = ['custom-class'];
        config.duration = 3000;
        this.snackBar.open("Cadastro atualizado com sucesso", "Fechar", config);
        this.form.reset();
    };
    FormDadosClienteComponent.prototype.orcaForm = function (myForm) {
        var _this = this;
        console.log("value " + this.orca.cpf);
        //cheking if any required field is empty
        if (myForm.status == "INVALID" || this.cpfOrcaFormControl.status == "INVALID") {
            var config_3 = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
            config_3.extraClasses = ['error-class'];
            config_3.duration = 3000;
            this.snackBar.open("Preencha todos os campos de orçamento", "Fechar", config_3);
            return null;
        }
        this.http.post(this.url + '/api/get_cli', { cpf: this.orca.cpf }).subscribe(function (resCliente) {
            _this.auxCliente = resCliente;
            //Put the current date in the date field
            myForm.value.data = new Date();
            //Acrescentando os campos que compoem um orçamento
            myForm.value.cpf = _this.orca.cpf;
            myForm.value.nome = _this.auxCliente.nome;
            myForm.value.telPrimario = _this.auxCliente.telPrimario;
            myForm.value.telSecundario = _this.auxCliente.telSecundario;
            myForm.value.email = _this.auxCliente.email;
            myForm.value.endereco = _this.auxCliente.endereco;
            _this.http.post(_this.url + '/api/add_orca', myForm.value)
                .subscribe(function (res) {
                console.log("sucessfull");
                _this.update = false;
                _this.cpfOrcaFormControl.reset();
                _this.form.reset();
                myForm.reset();
            }, function (err) {
                var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
                config.extraClasses = ['error-class'];
                config.duration = 3000;
                _this.snackBar.open("Erro na criação do orçamento: " + err.error.message, "Fechar", config);
                console.log("Error occured: " + err.error.message);
            });
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
        var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
        config.extraClasses = ['custom-class'];
        config.duration = 3000;
        this.snackBar.open("Orçamento criado com sucesso", "Fechar", config);
    };
    FormDadosClienteComponent.prototype.checkUser = function () {
        var _this = this;
        this.http.post("/api/get_cli", this.form.value).subscribe(function (data) {
            if (data != null) {
                //Setting the form values
                _this.form.setValue({ cpf: data.cpf, nome: data.nome, telPrimario: data.telPrimario, telSecundario: data.telSecundario,
                    email: data.email, endereco: data.endereco });
                _this.orca.cpf = data.cpf;
                _this.update = true;
            }
            else {
                _this.update = false;
            }
        });
    };
    FormDadosClienteComponent.prototype.checkUserWForm = function (myForm) {
        var _this = this;
        this.http.post("/api/get_cli", { cpf: this.orca.cpf }).subscribe(function (data) {
            if (data != null) {
                delete data._id;
                //Setting the form values
                _this.form.setValue(data);
                _this.orca.cpf = data.cpf;
                _this.update = true;
            }
            else {
                _this.update = false;
            }
        });
    };
    FormDadosClienteComponent.prototype.resetForm = function () {
        this.form.reset();
        this.form.markAsUntouched();
        this.form.markAsPristine();
        this.form.clearValidators();
    };
    FormDadosClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-dados-cliente',
            template: __webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/form-dados-cliente/form-dados-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSnackBar */]])
    ], FormDadosClienteComponent);
    return FormDadosClienteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/header-toolbar/header-toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"row my-toolbar mat-elevation-z2\" >\r\n\r\n\t<img routerLink=\"/acompanhamento\" class=\"my-logo\" fxFlexOffset=\"5\" src=\"assets/images/logo-name75.png\">\r\n\r\n\t<span (click)=\"toggle_class(0)\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[0] }\" routerLink=\"/cadastro-cliente\"  fxFlexOffset=\"14\" fxFlex = \"10\" > Orçamento </span>\r\n\r\n\t<span (click)=\"toggle_class(1)\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[1] }\"  routerLink=\"/acompanhamento\" fxFlex = \"12\" class=\"my-menus\"> Acompanhamento </span>\r\n\r\n\t<span (click)=\"toggle_class(2)\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[2] }\" routerLink=\"/historico\" fxFlex = \"10\" class=\"my-menus\"> Histórico </span>\r\n\r\n<!-- \t\t<span (click)=\"getHeader()\" [ngClass]=\"{'my-menus': true, 'my-menus-activated': menus[2] }\" routerLink=\"/historico\" fxFlex = \"10\" class=\"my-menus\"> HEAD </span> -->\r\n\r\n\t<!-- <img class=\"my-user\" fxFlexOffset=\"19\" src=\"assets/images/user-symbol.png\" style=\"cursor: pointer;\"> -->\r\n\r\n\t<button mat-icon-button fxFlexOffset=\"19\" [matMenuTriggerFor]=\"menu\">\r\n\t <img class=\"my-user\"  src=\"assets/images/user-symbol.png\" style=\"cursor: pointer;\">\r\n\t</button>\r\n<mat-menu #menu=\"matMenu\">\r\n  <button (click)=\"logout()\" mat-menu-item>\r\n    <span >Sair</span>\r\n  </button>\r\n</mat-menu>\r\n\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/pages/header-toolbar/header-toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-toolbar {\n  background: white;\n  border: 0px;\n  border-bottom: 1px;\n  border-style: solid;\n  border-color: #E2E2E2;\n  height: 100%;\n  width: 100%; }\n\n.mat-form-field-flex {\n  background: yellow;\n  color: yellow;\n  display: block; }\n\n.my-logo {\n  cursor: pointer;\n  outline: none; }\n\n.my-user {\n  cursor: pointer; }\n\n.my-menus {\n  border: 0px;\n  border-top: 5px;\n  border-color: white;\n  border-style: solid;\n  font-size: 1.06vw;\n  text-align: center;\n  line-height: 48px;\n  cursor: pointer; }\n\n.my-menus:hover {\n  color: #FF8405; }\n\nspan {\n  margin: 0px;\n  border: 0px;\n  outline: none; }\n\n.my-menus-activated {\n  border-color: #FF8405;\n  color: #FF8405; }\n", ""]);

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



var HeaderToolbarComponent = (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header-toolbar',
            template: __webpack_require__("../../../../../src/app/pages/header-toolbar/header-toolbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/header-toolbar/header-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], HeaderToolbarComponent);
    return HeaderToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/historico/historico-popup.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\"> \r\n<h1 mat-dialog-title>Informações do atendimento</h1>\r\n    <div class=\"column\">\r\n      \t<div class=\"row\">\r\n          <label > <b> Cliente : </b> {{data.nome}}</label>\r\n\r\n          <label fxFlexOffset=\"4\"> <b> Email : </b> {{data.email}}</label>\r\n\r\n\r\n\t    </div>\r\n      \r\n              <div class=\"row div-labels\" >\r\n          <label> <b> CPF : </b> {{data.cpf}}</label>\r\n\r\n          <label fxFlexOffset=\"4\" > <b> Telefone 1 : </b> {{data.telPrimario}}</label>\r\n\r\n          <label fxFlexOffset=\"4\" > <b> Telefone 2 : </b> {{data.telSecundario}}</label>\r\n      </div>      \r\n\r\n        <div class=\"row div-labels\">\r\n          <label> <b> Defeito : </b> {{data.defeito}}</label>\r\n        </div>\r\n\r\n        <div class=\"row div-labels\">\r\n          <label> <b> Marca : </b> {{data.marca}}</label>\r\n\r\n          <label fxFlexOffset=\"8\" > <b> Modelo : </b> {{data.modelo}}</label>\r\n\r\n          <label fxFlexOffset=\"4\" > <b> Endereço : </b> {{data.endereco}}</label>\r\n      </div> \r\n\r\n        <div class=\"row div-labels\" style=\"border-bottom: 4vh; border-style: solid; border-color: white;\">\r\n          <label> <b> Data atendimento : </b> {{data.data}}</label>\r\n\r\n          <label fxFlexOffset=\"4\" > <b> Periodo : </b> {{data.periodo}}</label>\r\n\r\n      </div> \r\n\r\n\r\n   </div>\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >\r\n<!--       \t<my-button-bw (click)=\"onNoClick()\" label=\"CANCELAR\" style=\"margin-top: 12px; margin-right: 5px;\"  >\r\n      \t</my-button-bw> -->\r\n\r\n\r\n        <button class=\"my-button\" mat-button [mat-dialog-close]=\"data\" cdkFocusInitial style=\"margin-top: 12px;\">FECHAR</button>\r\n  \r\n<!--         <my-button-orange [mat-dialog-close]=\"data.animal\"\r\n          fxFlexAlign=\"center\" label=\"CONFIRMAR\" style=\"margin-top: 12px;\">\r\n        </my-button-orange>  -->\r\n      </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/historico/historico-popup.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 100%;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n\n.div-labels {\n  border: 0px;\n  border-top: 5vh;\n  border-style: solid;\n  border-color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/historico/historico.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-toolbar></app-header-toolbar>\r\n<div style=\"width: 100vw; height: 90vh; background: rgba(235,233,234, 0.3);\">\r\n<div class=\"example-container mat-elevation-z8\">\r\n  <div class=\"example-header row mat-elevation-z4\">\r\n\r\n    <mat-form-field class=\"searchBoxes\" fxFlex=\"13\">\r\n      <input class=\"searchBoxesIn\" matInput\r\n        [(ngModel)] = \"searchIn[0]\" \r\n        (keyup)=\"applyFilter($event.target.value)\"\r\n        (blur)=\"blured()\"\r\n        placeholder=\"Filtrar CPF...\">\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field class=\"searchBoxes\" fxFlexOffset=\"3.5\" fxFlex=\"13\">\r\n      <input matInput\r\n        [(ngModel)] = \"searchIn[1]\" \r\n        (keyup)=\"applyFilter($event.target.value)\"\r\n        (blur)=\"blured()\"\r\n        placeholder=\"Filtrar Cliente...\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"searchBoxes\" fxFlexOffset=\"3.5\" fxFlex=\"13\">\r\n      <input matInput\r\n        [(ngModel)] = \"searchIn[2]\" \r\n        (keyup)=\"applyFilter($event.target.value)\"\r\n        (blur)=\"blured()\"\r\n        placeholder=\"Filtrar Telefone..\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"searchBoxes\" fxFlexOffset=\"3.5\" fxFlex=\"13\">\r\n      <input matInput\r\n        [(ngModel)] = \"searchIn[3]\" \r\n        (keyup)=\"applyFilter($event.target.value)\"\r\n        (blur)=\"blured()\"\r\n        placeholder=\"Filtrar Status..\">\r\n    </mat-form-field>\r\n        \r\n  <mat-form-field class=\"searchBoxes\" fxFlexOffset=\"3.5\" fxFlex=\"13\">\r\n      <input matInput\r\n        [(ngModel)] = \"searchIn[4]\" \r\n        (keyup)=\"applyFilter($event.target.value)\"\r\n        (blur)=\"blured()\"\r\n        placeholder=\"Filtrar Faturamento..\">\r\n  </mat-form-field>\r\n\r\n    <mat-form-field class=\"searchBoxes\" fxFlexOffset=\"4\" fxFlex=\"13\">\r\n      <input matInput\r\n      [(ngModel)] = \"searchIn[5]\" \r\n      (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar Preço...\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <mat-table #table [dataSource]=\"dataCurrent\">\r\n    \r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"cpf\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> CPF </mat-header-cell>\r\n      <mat-cell class=\"cells\" *matCellDef=\"let element; let i = index\"> {{element.cpf}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"nome\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\" > Clientes </mat-header-cell>\r\n      <mat-cell  class=\"cells\" *matCellDef=\"let element; let i = index\"> {{element.nome}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"telPrimario\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Telefone </mat-header-cell>\r\n      <mat-cell class=\"cells\" *matCellDef=\"let element; let i = index\"> {{element.telPrimario}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"status\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Status </mat-header-cell>\r\n      <mat-cell class=\"cells\" *matCellDef=\"let element; let i = index\"> {{element.status}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Faturamento column -->\r\n    <ng-container matColumnDef=\"data\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Faturamento </mat-header-cell>\r\n      <mat-cell class=\"cells\" *matCellDef=\"let element; let i = index\"> {{element.data}}  </mat-cell>\r\n    </ng-container>\r\n\r\n        <!-- Faturamento column -->\r\n    <ng-container matColumnDef=\"valorFinal\">\r\n      <mat-header-cell *matHeaderCellDef style=\"font-size: 14px; font-weight: 900; color: black;\"> Preço </mat-header-cell>\r\n      <mat-cell  class=\"cells\" *matCellDef=\"let element; let i = index\"> {{element.valorFinal }}  </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row style=\"display: none\" *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <!-- DÁ PRA FAZER COM O MATROW?-->\r\n    <mat-row  (click) = \"openDialogHistorico(i)\" style=\"cursor: pointer;\" *matRowDef=\"let row; columns: displayedColumns; let i = index\"></mat-row>\r\n  </mat-table>\r\n  \r\n    <mat-paginator #paginator\r\n                \r\n                 [pageSize]=\"10\"\r\n                 [pageSizeOptions]=\"[5, 10, 20]\"\r\n                 >\r\n  </mat-paginator>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/historico/historico.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  height: 12vh;\n  padding: 0px 1.757vw 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  border: 0px;\n  border-top: 2vh;\n  border-color: rgba(235, 233, 234, 0.3);\n  border-style: solid;\n  overflow: auto;\n  height: 64.5vh;\n  background: rgba(235, 233, 234, 0.3); }\n\n.mat-paginator {\n  height: 9vh;\n  background: rgba(235, 233, 234, 0.7); }\n\n.cells:hover {\n  cursor: pointer; }\n\nmat-row:hover {\n  background: rgba(180, 180, 180, 0.25); }\n\n.searchBoxes {\n  padding-top: 1.0vh;\n  padding-bottom: 1.5vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/historico/historico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HistoricoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
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




var HistoricoComponent = (function () {
    function HistoricoComponent(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.searchIn = ["", "", "", "", "", ""];
        //url = "http://localhost:3000"
        //url = "http://localhost"
        this.url = "http://myas.com.br";
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['cpf', 'nome', 'telPrimario', 'status', 'data', 'valorFinal'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](this.ELEMENT_DATA);
        this.dataCurrent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](this.ELEMENT_DATA);
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
    HistoricoComponent.prototype.ngAfterViewInit = function () {
        this.dataCurrent.paginator = this.paginator;
    };
    HistoricoComponent.prototype.ngOnInit = function () {
        //this.ELEMENT_DATA.push(curel);
        var _this = this;
        this.http.get(this.url + '/api/get_all_finalizados').subscribe(function (data) {
            //Agora todos os dados estao na variavel data
            _this.auxData = data;
            for (var i = 0; i < _this.auxData.length; i++) {
                //var currentElement = {cpf: this.auxData[i].cpf, nome: this.auxData[i].nome, telPrimario: this.auxData[i].telPrimario, status: "Finalizado", faturamento: new Date(this.auxData[i].data).getDay() + "/"+ (new Date(this.auxData[i].data).getMonth()+1) + "/" + new Date(this.auxData[i].data).getFullYear(), preco: this.auxData[i].valorFinal };
                _this.auxData[i].status = "Finalizado";
                _this.ELEMENT_DATA.push(_this.auxData[i]);
            }
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](_this.ELEMENT_DATA);
            _this.dataCurrent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](_this.ELEMENT_DATA);
            _this.dataCurrent.paginator = _this.paginator;
            _this.dataSource.paginator = _this.paginator;
        });
        /*  	for (var i = 0; i < this.ELEMENT_DATA.length; i++) {
                ELEMENT_DATA_PRECOS.push(( (this.ELEMENT_DATA[i].preco)/100).toFixed(2));
        
                if(this.ELEMENT_DATA[i].faturamento.getMonth() <= 8){
                    this.ELEMENT_DATA[i].faturamentoString = this.ELEMENT_DATA[i].faturamento.getDate().toString() + "/0" + (this.ELEMENT_DATA[i].faturamento.getMonth() + 1).toString() + "/" + this.ELEMENT_DATA[i].faturamento.getFullYear().toString();
                }
                else{
                    this.ELEMENT_DATA[i].faturamentoString = this.ELEMENT_DATA[i].faturamento.getDate().toString() + "/" + (this.ELEMENT_DATA[i].faturamento.getMonth() + 1).toString() + "/" + this.ELEMENT_DATA[i].faturamento.getFullYear().toString();
                }
            } */
    };
    HistoricoComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataCurrent.filter = filterValue;
        //this.dataSource = new MatTableDataSource(this.dataSource.filteredData);
    };
    HistoricoComponent.prototype.blured = function () {
        this.dataCurrent = this.dataSource;
        for (var i = 0; i < this.searchIn.length; i++) {
            this.searchIn[i] = this.searchIn[i].trim(); // Remove whitespace
            this.searchIn[i] = this.searchIn[i].toLowerCase(); // MatTableDataSource defaults to lowercase matches
            this.dataCurrent.filter = this.searchIn[i];
            this.dataCurrent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatTableDataSource */](this.dataCurrent.filteredData);
            this.dataCurrent.paginator = this.paginator;
        }
    };
    HistoricoComponent.prototype.cellClicked = function (CPF) {
        for (var i = 0; i < this.dataCurrent.data.length; i++) {
            if (this.dataCurrent[i].cpf == CPF) {
            }
        }
    };
    HistoricoComponent.prototype.openDialogHistorico = function (index) {
        var dialogRef = this.dialog.open(HistoricPopupComponent, {
            width: '49vw',
            data: this.dataCurrent.filteredData[index]
            //data: { cliente : this.dataCurrent.filteredData[0].cliente, cpf : this.dataCurrent.filteredData[0].cpf, defeito : this.dataCurrent.filteredData[0].defeito,  //name: this.name, animal: this.animal
            //}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed' + result);
        });
    };
    HistoricoComponent.prototype.teste = function (input) {
        console.log(input);
        console.log(this.dataCurrent.filteredData[input]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatPaginator */])
    ], HistoricoComponent.prototype, "paginator", void 0);
    HistoricoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-historico',
            template: __webpack_require__("../../../../../src/app/pages/historico/historico.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/historico/historico.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatDialog */]])
    ], HistoricoComponent);
    return HistoricoComponent;
}());

var HistoricPopupComponent = (function () {
    function HistoricPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    HistoricPopupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    HistoricPopupComponent.prototype.ngOnInit = function () {
    };
    HistoricPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'historico-popup',
            template: __webpack_require__("../../../../../src/app/pages/historico/historico-popup.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/historico/historico-popup.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogRef */], Object])
    ], HistoricPopupComponent);
    return HistoricPopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loadSpinner\" class=\"loading-indicator\">\r\n  <mat-progress-spinner style=\"stroke: black\" mode=\"indeterminate\"></mat-progress-spinner>\r\n</div>\r\n\r\n\r\n<form #loginForm=\"ngForm\" >\r\n\r\n <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100vh;\">\r\n\r\n  <div class=\"login-img\" fxFlex=\"39\">\r\n   <img routerLink=\"/acompanhamento\" class=\"my-log-img\" src=\"../assets/images/login_1.png\">\r\n </div>\r\n\r\n <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"61\">        \r\n\r\n  <div style=\"width: 17%;\">\r\n   <img routerLink=\"/acompanhamento\" class=\"my-logo\" src=\"../assets/images/logo-login.png\">\r\n </div>\r\n\r\n <mat-form-field fxFlexOffset=\"5\" class=\"my-inputs\" [hideRequiredMarker]=\"true\">\r\n  <input [(ngModel)] = \"user\" matInput name=\"user\" placeholder=\"Insira seu email\" required>\r\n</mat-form-field>\r\n\r\n<mat-form-field class=\"my-inputs\" [hideRequiredMarker]=\"true\">\r\n  <input  [(ngModel)] = \"pass\" type=\"password\" matInput name=\"pass\" placeholder=\"Senha\" required>\r\n</mat-form-field>\r\n\r\n<button mat-button class='my-button' fxFlexOffset=\"2\" (click)=\"login(loginForm)\" >ENTRAR</button>\r\n\r\n<span fxFlexOffset=\"4\" class=\"forgot-password\">Esqueceu sua senha?</span>\r\n\r\n<!-- <span routerLink=\"/esqueci-senha\" fxFlexOffset=\"7\" class=\"forgot-password\">Esqueceu sua senha?</span>\r\n -->\r\n\r\n</div> \r\n\r\n</div>\r\n\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-img {\n  margin: 0px;\n  background: black; }\n\n.my-log-img {\n  width: 100%;\n  height: 100%; }\n\n.my-logo {\n  width: 100%;\n  height: 100%; }\n\n.my-inputs {\n  width: 50%; }\n\n.enter-button {\n  width: 50%; }\n\n.forgot-password {\n  font-size: 13px;\n  color: #B5B5B5;\n  cursor: pointer; }\n\n.my-button {\n  background: linear-gradient(-150deg, #FF8405 0%, #FF433F 100%);\n  box-shadow: 0 2px 7px 0 rgba(120, 137, 149, 0.25);\n  border-radius: 3px;\n  font-size: 13px;\n  color: #FFFFFF;\n  width: 50%;\n  padding-top: 0.2vw;\n  padding-bottom: 0.2vw; }\n\n::ng-deep .error-class .mat-simple-snackbar {\n  color: red;\n  font-weight: 600; }\n\n::ng-deep .error-class .mat-simple-snackbar button {\n  color: rgba(190, 190, 190, 0.8); }\n\n/* Absolute Center Spinner */\n.loading-indicator {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: black; }\n\n/* Transparent Overlay */\n.loading-indicator:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n", ""]);

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




var LoginComponent = (function () {
    function LoginComponent(http, router, snackBar) {
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
    LoginComponent.prototype.canActivate = function (route, state) {
        if (this.getCookie("dcJJe4ZEsB") == "%265nPPAJk0i%23%7BDBw%5D%3C%7B%2C%40%3Ad%2BRQGp7xb") {
            console.log("auth acompanhamento");
            return true;
        }
        else {
            console.log("log false");
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login']);
            return false;
        }
    };
    LoginComponent.prototype.signup = function (loginForm) {
        var req = this.http.post(this.url + '/api/signup', loginForm.value)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        this.loadSpinner = true;
        var req = this.http.post(this.url + '/api/login', loginForm.value)
            .subscribe(function (res) {
            console.log("im here" + res);
            _this.router.navigate(['/acompanhamento']);
        }, function (err) {
            _this.loadSpinner = false;
            var config = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatSnackBarConfig */]();
            config.extraClasses = ['error-class'];
            config.duration = 3000;
            _this.snackBar.open("Login e/ou senha incorretos", "Fechar", config);
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent.prototype.getHeader = function () {
        var req = this.http.get(this.url + '/api/header')
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured: " + err.error.message);
        });
    };
    LoginComponent.prototype.getCookie = function (cname) {
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
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatSnackBar */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/orca-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrcaDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_schemas_cardStore__ = __webpack_require__("../../../../../src/app/common_components/schemas/cardStore.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrcaDataService = (function () {
    function OrcaDataService(http) {
        var _this = this;
        this.http = http;
        this.url = "http://myas.com.br";
        //List names for the backend requests be directly to the right collection
        this.listsNames = ["orcas", "atendimentos", "agPecas", "rtVisita", "pagamento", "finalizados"];
        //Initializing orca list
        var listsAux = [
            {
                name: 'Visita Orçamento',
                cards: [],
                id: "l0"
            },
            {
                name: 'Visita técnico',
                cards: [],
                id: "l1"
            },
            {
                name: 'Aguardando Peças',
                cards: [],
                id: "l2"
            },
            {
                name: 'Retorno Visita',
                cards: [],
                id: "l3"
            },
            {
                name: 'Pagamento',
                cards: [],
                id: "l4"
            },
            {
                name: 'Clientes finalizados',
                cards: [],
                id: "l5"
            }
        ];
        this.lists = listsAux;
        this.cardStore = new __WEBPACK_IMPORTED_MODULE_2__common_components_schemas_cardStore__["a" /* CardStore */]();
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
        this.requestOrcas();
        //Getting the new cards X miliseconds
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].interval(10000).subscribe(function (x) {
            _this.requestOrcas();
        });
    }
    //Method to request orcas from db
    OrcaDataService.prototype.requestOrcas = function () {
        var _this = this;
        this.http.get("/api/get_" + this.listsNames[0]).subscribe(function (data) {
            console.log("-----------" + 0 + "----------");
            console.log(_this.listsNames[0]);
            _this.dataHolder = data;
            console.log(_this.lists[0].cards);
            for (var j = 0; j < _this.dataHolder.length; j++) {
                var result = _this.cardStore.findCard(data[j]._id);
                if (!result.exists) {
                    //Adding to the right list
                    var cardId = _this.cardStore.newCard("Orçamento", data[j].cpf, data[j]._id, data[j].defeito, data[j].nome, data[j].telPrimario, new Date(data[j].data), data[j].imei, data[j].endereco, data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, null, null, data[j].observacoes, data[j]._id);
                    _this.lists[0].cards.push(cardId);
                }
            }
        }, function (err) {
            console.log("Error occured: c" + err.error.message);
        });
        this.http.get("/api/get_" + this.listsNames[1]).subscribe(function (data) {
            console.log("-----------" + 1 + "----------");
            console.log(_this.listsNames[1]);
            _this.dataHolder = data;
            console.log(_this.lists[1].cards);
            for (var j = 0; j < _this.dataHolder.length; j++) {
                var result = _this.cardStore.findCard(data[j]._id);
                if (!result.exists) {
                    //Adding to the right list
                    var cardId = _this.cardStore.newCard("Orçamento", data[j].cpf, data[j]._id, data[j].defeito, data[j].nome, data[j].telPrimario, new Date(data[j].data), data[j].imei, data[j].endereco, data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, null, null, data[j].observacoes, data[j].ordServ);
                    _this.lists[1].cards.push(cardId);
                }
            }
        }, function (err) {
            console.log("Error occured: c" + err.error.message);
        });
        this.http.get("/api/get_" + this.listsNames[2]).subscribe(function (data) {
            console.log("-----------" + 2 + "----------");
            console.log(_this.listsNames[2]);
            _this.dataHolder = data;
            console.log(_this.lists[2].cards);
            for (var j = 0; j < _this.dataHolder.length; j++) {
                var result = _this.cardStore.findCard(data[j]._id);
                if (!result.exists) {
                    //Adding to the right list
                    var cardId = _this.cardStore.newCard("Orçamento", data[j].cpf, data[j]._id, data[j].defeito, data[j].nome, data[j].telPrimario, new Date(data[j].data), data[j].imei, data[j].endereco, data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, null, null, data[j].observacoes, data[j].ordServ);
                    _this.lists[2].cards.push(cardId);
                }
            }
        }, function (err) {
            console.log("Error occured: c" + err.error.message);
        });
        this.http.get("/api/get_" + this.listsNames[3]).subscribe(function (data) {
            console.log("-----------" + 3 + "----------");
            console.log(_this.listsNames[3]);
            _this.dataHolder = data;
            console.log(_this.lists[3].cards);
            for (var j = 0; j < _this.dataHolder.length; j++) {
                var result = _this.cardStore.findCard(data[j]._id);
                if (!result.exists) {
                    //Adding to the right list
                    var cardId = _this.cardStore.newCard("Orçamento", data[j].cpf, data[j]._id, data[j].defeito, data[j].nome, data[j].telPrimario, new Date(data[j].data), data[j].imei, data[j].endereco, data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, null, null, data[j].observacoes, data[j].ordServ);
                    _this.lists[3].cards.push(cardId);
                }
            }
        }, function (err) {
            console.log("Error occured: c" + err.error.message);
        });
        this.http.get("/api/get_" + this.listsNames[4]).subscribe(function (data) {
            console.log("-----------" + 4 + "----------");
            console.log(_this.listsNames[4]);
            _this.dataHolder = data;
            console.log(_this.lists[4].cards);
            for (var j = 0; j < _this.dataHolder.length; j++) {
                var result = _this.cardStore.findCard(data[j]._id);
                if (!result.exists) {
                    //Adding to the right list
                    var cardId = _this.cardStore.newCard("Orçamento", data[j].cpf, data[j]._id, data[j].defeito, data[j].nome, data[j].telPrimario, new Date(data[j].data), data[j].imei, data[j].endereco, data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, null, null, data[j].observacoes, data[j].ordServ);
                    _this.lists[4].cards.push(cardId);
                }
            }
        }, function (err) {
            console.log("Error occured: c" + err.error.message);
        });
        this.http.get("/api/get_" + this.listsNames[5]).subscribe(function (data) {
            console.log("-----------" + 5 + "----------");
            console.log(_this.listsNames[5]);
            _this.dataHolder = data;
            console.log(_this.lists[5].cards);
            for (var j = 0; j < _this.dataHolder.length; j++) {
                var result = _this.cardStore.findCard(data[j]._id);
                if (!result.exists) {
                    //Adding to the right list
                    var cardId = _this.cardStore.newCard("Orçamento", data[j].cpf, data[j]._id, data[j].defeito, data[j].nome, data[j].telPrimario, new Date(data[j].data), data[j].imei, data[j].endereco, data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, null, null, data[j].observacoes, data[j].ordServ);
                    _this.lists[5].cards.push(cardId);
                }
            }
        }, function (err) {
            console.log("Error occured: c" + err.error.message);
        });
    };
    OrcaDataService.prototype.getOrcasList = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(this.lists);
    };
    OrcaDataService.prototype.getCardStore = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(this.cardStore);
    };
    /*Apply some command in one list
      @Params:
      commandAdd: Url of the command to add the card on new list(send to back end)
      commandRemove: Url of the command to remove the card on new list(send to back end)
      card: The that will be changed
    */
    OrcaDataService.prototype.addAndRemove = function (commandAdd, commandRemove, card) {
        var _this = this;
        //Updating variable on service, to refresh all clients list
        this.cardStore.updateCard(card.id, card);
        //Obtaining the list id
        var listAux = this.whichList(card.id);
        //Removing the card from lists
        console.log("Removendo o card: " + card.id + " da lista " + listAux.listID);
        // Find and remove item from an array
        var i = this.lists[listAux.listID].cards.indexOf(card.id);
        if (i != -1) {
            this.lists[listAux.listID].cards.splice(i, 1);
        }
        this.cardStore.removeCard(card.id);
        //Updating db cards
        this.http.post(this.url + commandAdd, card).subscribe(function (res) {
            _this.http.post(_this.url + commandRemove, card).subscribe(function (res) {
                console.log("Card movido com sucesso.");
                return true;
            }, function (err) {
                console.log("Error occured:aaa " + err.error.message);
                return false;
            });
        }, function (err) {
            console.log("Error occured: bbb" + err.error.message);
            return false;
        });
        return true;
    };
    OrcaDataService.prototype.whichList = function (cardID) {
        var ret = { listID: -1, listName: "error" };
        for (var i = 0; i < this.lists.length; i++) {
            if (this.lists[i].cards.includes(cardID.toString())) {
                ret = { listID: i, listName: this.lists[i].name };
                break;
            }
        }
        return ret;
    };
    OrcaDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OrcaDataService);
    return OrcaDataService;
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