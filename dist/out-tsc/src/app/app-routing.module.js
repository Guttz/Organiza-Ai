"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/*Import dos formularios*/
var form_dados_cliente_component_1 = require("./pages/form-dados-cliente/form-dados-cliente.component");
var acompanhamento_component_1 = require("./pages/acompanhamento/acompanhamento.component");
var historico_component_1 = require("./pages/historico/historico.component");
var login_component_1 = require("./pages/login/login.component");
var cadastro_component_1 = require("./pages/cadastro/cadastro.component");
var forgot_password_component_1 = require("./pages/forgot-password/forgot-password.component");
var auth_guard_1 = require("./common_components/_guard/auth.guard");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'cadastro-cliente',
        component: form_dados_cliente_component_1.FormDadosClienteComponent,
        canActivate: [login_component_1.LoginComponent]
    },
    {
        path: 'acompanhamento',
        component: acompanhamento_component_1.AcompanhamentoComponent,
        canActivate: [login_component_1.LoginComponent]
    },
    {
        path: 'historico',
        component: historico_component_1.HistoricoComponent,
        canActivate: [login_component_1.LoginComponent]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'cadastro',
        component: cadastro_component_1.CadastroComponent
    },
    {
        path: 'esqueci-senha',
        component: forgot_password_component_1.ForgotPasswordComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    { path: '**', redirectTo: '/acompanhamento', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map