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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var orca_data_service_1 = require("../../services/orcaData/orca-data.service");
// Importing CPF and CNPJ validators 
var CPF = require("cpf_cnpj").CPF;
var CNPJ = require("cpf_cnpj").CNPJ;
var FormDadosClienteComponent = /** @class */ (function () {
    function FormDadosClienteComponent(http, snackBar, ordaDataService) {
        this.http = http;
        this.snackBar = snackBar;
        this.ordaDataService = ordaDataService;
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
        this.nomeFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
        ]);
        this.enderecoFormControl = new forms_1.FormControl('', []);
        //My validators
        this.cpfFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            this.cpfValidator
        ]);
        //My validators
        this.cpfOrcaFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            this.cpfValidator
        ]);
        this.emailFormControl = new forms_1.FormControl('', [
            this.emailValidator
        ]);
        this.telFormControl = new forms_1.FormControl('', [
            forms_1.Validators.required,
            this.phoneValidator
        ]);
        this.telTwoFormControl = new forms_1.FormControl('', [
            this.phoneValidator
        ]);
        //Declaring the form group to interact with the form
        this.form = new forms_1.FormGroup({
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
            var config_1 = new material_1.MatSnackBarConfig();
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
            var config = new material_1.MatSnackBarConfig();
            config.extraClasses = ['custom-class'];
            config.duration = 3000;
            _this.snackBar.open("Erro no cadastro: " + err.error.message, "Fechar", config);
            console.log("Error occured: " + err.error.message);
        });
        this.update = false;
        this.orca.cpf = this.form.value.cpf;
        var config = new material_1.MatSnackBarConfig();
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
            var config_2 = new material_1.MatSnackBarConfig();
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
            var config = new material_1.MatSnackBarConfig();
            config.extraClasses = ['error-class'];
            config.duration = 3000;
            _this.snackBar.open("Erro na atualização de cadastro: " + err.error.message, "Fechar", config);
            console.log("Error occured: " + err.error.message);
        });
        this.update = false;
        this.orca.cpf = this.form.value.cpf;
        var config = new material_1.MatSnackBarConfig();
        config.extraClasses = ['custom-class'];
        config.duration = 3000;
        this.snackBar.open("Cadastro atualizado com sucesso", "Fechar", config);
        this.form.reset();
    };
    FormDadosClienteComponent.prototype.orcaForm = function (myForm) {
        var _this = this;
        //cheking if any required field is empty
        if (myForm.status == "INVALID" || this.cpfOrcaFormControl.status == "INVALID") {
            var config_3 = new material_1.MatSnackBarConfig();
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
            _this.ordaDataService.addNewCard(myForm.value, 0);
        }, function (err) {
            console.log(err.error.message);
        });
        var config = new material_1.MatSnackBarConfig();
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
    FormDadosClienteComponent.prototype.resetForm = function () {
        this.form.reset();
        this.form.markAsUntouched();
        this.form.markAsPristine();
        this.form.clearValidators();
    };
    FormDadosClienteComponent = __decorate([
        core_1.Component({
            selector: 'form-dados-cliente',
            templateUrl: './form-dados-cliente.component.html',
            styleUrls: ['./form-dados-cliente.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, material_1.MatSnackBar, orca_data_service_1.OrcaDataService])
    ], FormDadosClienteComponent);
    return FormDadosClienteComponent;
}());
exports.FormDadosClienteComponent = FormDadosClienteComponent;
//# sourceMappingURL=form-dados-cliente.component.js.map