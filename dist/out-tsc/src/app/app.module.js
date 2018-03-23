"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
/*Angular material components*/
require("hammerjs");
var animations_1 = require("@angular/platform-browser/animations");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var select_1 = require("@angular/material/select");
var datepicker_1 = require("@angular/material/datepicker");
var toolbar_1 = require("@angular/material/toolbar");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var primeng_1 = require("primeng/primeng");
var table_1 = require("@angular/material/table");
var menu_1 = require("@angular/material/menu");
var dialog_1 = require("@angular/material/dialog");
var material_2 = require("@angular/material");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var material_3 = require("@angular/material");
var material_4 = require("@angular/material");
/*Import dos componentes simples*/
var my_input_text_component_1 = require("./common_components/my-input-text/my-input-text.component");
var card_component_1 = require("./common_components/card/card.component");
var list_component_1 = require("./common_components/list/list.component");
var my_button_component_1 = require("./common_components/my-button/my-button.component");
var my_button_bw_component_1 = require("./common_components/my-button-bw/my-button-bw.component");
var my_input_select_component_1 = require("./common_components/my-input-select/my-input-select.component");
var my_form_header_component_1 = require("./common_components/my-form-header/my-form-header.component");
/*Import dos formularios*/
var form_dados_cliente_component_1 = require("./pages/form-dados-cliente/form-dados-cliente.component");
var app_routing_module_1 = require("./app-routing.module");
/*Import de bibliotecas*/
var flex_layout_1 = require("@angular/flex-layout");
/*Import das Páginas*/
var header_toolbar_component_1 = require("./pages/header-toolbar/header-toolbar.component");
var acompanhamento_component_1 = require("./pages/acompanhamento/acompanhamento.component");
var historico_component_1 = require("./pages/historico/historico.component");
var historico_component_2 = require("./pages/historico/historico.component");
var acompanhamento_component_2 = require("./pages/acompanhamento/acompanhamento.component");
var acompanhamento_component_3 = require("./pages/acompanhamento/acompanhamento.component");
var login_component_1 = require("./pages/login/login.component");
var cadastro_component_1 = require("./pages/cadastro/cadastro.component");
var forgot_password_component_1 = require("./pages/forgot-password/forgot-password.component");
var auth_guard_1 = require("./common_components/_guard/auth.guard");
var orca_data_service_1 = require("./services/orcaData/orca-data.service");
var userSettings_service_1 = require("./services/userSettings/userSettings.service");
var socketComunicator_service_1 = require("./services/socketComunicator/socketComunicator.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                my_input_text_component_1.MyInputTextComponent,
                my_button_component_1.MyButtonComponent,
                my_button_bw_component_1.MyButtonBwComponent,
                card_component_1.CardComponent,
                list_component_1.ListComponent,
                my_input_select_component_1.MyInputSelectComponent,
                form_dados_cliente_component_1.FormDadosClienteComponent,
                my_form_header_component_1.MyFormHeaderComponent,
                header_toolbar_component_1.HeaderToolbarComponent,
                acompanhamento_component_1.AcompanhamentoComponent,
                historico_component_1.HistoricoComponent,
                acompanhamento_component_2.ClienteAtenderComponent,
                acompanhamento_component_3.AtendimentoComponent,
                historico_component_2.HistoricPopupComponent,
                login_component_1.LoginComponent,
                cadastro_component_1.CadastroComponent,
                forgot_password_component_1.ForgotPasswordComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                datepicker_1.MatDatepickerModule,
                material_1.MatNativeDateModule,
                toolbar_1.MatToolbarModule,
                primeng_1.DragDropModule,
                table_1.MatTableModule,
                menu_1.MatMenuModule,
                dialog_1.MatDialogModule,
                material_2.MatSnackBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                material_3.MatPaginatorModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                http_1.HttpClientModule,
                material_4.MatIconModule,
            ],
            entryComponents: [
                acompanhamento_component_1.AcompanhamentoComponent,
                acompanhamento_component_2.ClienteAtenderComponent,
                acompanhamento_component_3.AtendimentoComponent,
                login_component_1.LoginComponent,
                cadastro_component_1.CadastroComponent,
                historico_component_1.HistoricoComponent,
                historico_component_2.HistoricPopupComponent
            ],
            providers: [
                login_component_1.LoginComponent,
                cadastro_component_1.CadastroComponent,
                auth_guard_1.AuthGuard,
                orca_data_service_1.OrcaDataService,
                userSettings_service_1.UserSettingsService,
                socketComunicator_service_1.SocketComunicator
            ],
            bootstrap: [app_component_1.AppComponent],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map