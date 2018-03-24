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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var material_1 = require("@angular/material");
var orca_data_service_1 = require("../../services/orcaData/orca-data.service");
/*----------------------------------ClienteAtenderComponent--------------------------------------*/
var ClienteAtenderComponent = /** @class */ (function () {
    function ClienteAtenderComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.reducedID = this.data.ordServ.substring(17, 24);
    }
    ClienteAtenderComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ClienteAtenderComponent.prototype.ngOnInit = function () {
    };
    ClienteAtenderComponent = __decorate([
        core_1.Component({
            selector: 'app-cliente-atender',
            templateUrl: './cliente-atender/cliente-atender.component.html',
            styleUrls: ['./cliente-atender/cliente-atender.component.scss']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], ClienteAtenderComponent);
    return ClienteAtenderComponent;
}());
exports.ClienteAtenderComponent = ClienteAtenderComponent;
/*----------------------------------AtendimentoComponent-----------------------------------------*/
var AtendimentoComponent = /** @class */ (function () {
    function AtendimentoComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.metPag = [
            { value: 'Débito' },
            { value: 'Crédito' },
            { value: 'Cheque' },
            { value: 'Dinheiro' },
        ];
        this.options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit',
            minute: '2-digit', second: '2-digit' };
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
    AtendimentoComponent.prototype.ngOnInit = function () {
    };
    AtendimentoComponent = __decorate([
        core_1.Component({
            selector: 'my-atendimento',
            templateUrl: '/atendimento/atendimento.component.html',
            styleUrls: ['/atendimento/atendimento.component.scss']
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], AtendimentoComponent);
    return AtendimentoComponent;
}());
exports.AtendimentoComponent = AtendimentoComponent;
/*----------------------------------AcompanhamentoComponent---------------------------------------*/
var AcompanhamentoComponent = /** @class */ (function () {
    function AcompanhamentoComponent(http, dialog, ordaDataService) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.ordaDataService = ordaDataService;
        //url = "http://localhost";
        //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
        this.url = "http://myas.com.br";
        //List names for the backend requests be directly to the right collection
        this.listsNames = ["atendimento", "agPecas", "rtVisita", "pagamento", "finalizado"];
        //All the ids of lists that will not popup when clicked
        this.listNoPopUp = [4];
        //All the ids of lists that will no move with the dropFunction
        this.listNoMove = [4];
        var aux = this.listsNames.length;
        this.listSize = aux;
        this.ordaDataService.getOrcasList().subscribe(function (lists) { return _this.lists = lists; });
    }
    AcompanhamentoComponent.prototype.ngOnInit = function () {
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
        var listID = target.id;
        //Checking if is the "finalizado" column so a pop up wont be oppened
        if (listID >= this.listSize - 1) {
            console.log("Erro você clicou em uma coluna que não existe.");
            return;
        }
        if (this.listNoPopUp.includes(listID)) {
            console.log("Essa coluna não pode exibir popups.");
            return;
        }
        if (listID == 0) {
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
        //The one it came from
        var fromList = parseInt(cardNlist.substring(0, 1));
        //The one that the card is being dropped
        var toList = target.id;
        //The card that is being dropped id from the cardStore
        var ordServ = cardNlist.substring(1, cardNlist.length);
        //If the list the card is being dropped is the same if came from just return and do nothing
        if (fromList == toList) {
            console.log("Você tentou mover um card para propria coluna.");
            return;
        }
        if (this.listNoMove.includes(fromList)) {
            console.log("Você esta tentando mover uma lista com movimento bloqueado.");
            return;
        }
        this.moveCard(ordServ, fromList, toList);
    };
    AcompanhamentoComponent.prototype.getCard = function (ordServ, listID) {
        var card = null;
        //Searching the clicked card on the list
        for (var i = 0; i < this.lists[listID].cards.length; i++) {
            if (this.lists[listID].cards[i].getOrdServ() == ordServ) {
                card = this.lists[listID].cards[i];
                break;
            }
        }
        if (card == null) {
            console.log("Não foi possivel achar o cartão de ordServ " + ordServ + " na lista " + listID + ".");
            return null;
        }
        return card;
    };
    AcompanhamentoComponent.prototype.clickOrcamento = function (ordServ, listID) {
        var _this = this;
        var card = this.getCard(ordServ, listID);
        if (card == null)
            return;
        var dialogRef = this.dialog.open(ClienteAtenderComponent, {
            width: '44vw',
            data: card
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //Result is a json of all form data
            if (result != null) {
                //Relating the result information with the card information
                card.defeito = result.defeito;
                card.marca = result.marca;
                card.modelo = result.modelo;
                card.data = result.data;
                card.observacoes = result.observacoes;
                card.updateCard(card.getJson());
                //Sending this update to service
                _this.ordaDataService.addAndRemove(card, listID, listID);
            }
        });
    };
    AcompanhamentoComponent.prototype.clickVisited = function (ordServ, listID) {
        var _this = this;
        var card = this.getCard(ordServ, listID);
        if (card == null)
            return;
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Relating the result information with the card information
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
                //Sending this update to service
                _this.ordaDataService.addAndRemove(card, listID, listID);
            }
        });
    };
    AcompanhamentoComponent.prototype.moveCard = function (ordServ, fromList, toList) {
        var _this = this;
        var card = this.getCard(ordServ, fromList);
        if (card == null)
            return;
        //Open the pop up with the card infos
        var dialogRef = this.dialog.open(AtendimentoComponent, {
            width: '44vw',
            data: card
        });
        //After the dialog is closed thats the called function
        dialogRef.afterClosed().subscribe(function (result) {
            //In case the user pressed confirm
            if (result != null) {
                //Relating the result information with the card information
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
                //Sending this update to service
                _this.ordaDataService.addAndRemove(card, fromList, toList);
            }
        });
    };
    AcompanhamentoComponent = __decorate([
        core_1.Component({
            selector: 'my-acompanhamento',
            templateUrl: './acompanhamento.component.html',
            styleUrls: ['./acompanhamento.component.scss']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, material_1.MatDialog,
            orca_data_service_1.OrcaDataService])
    ], AcompanhamentoComponent);
    return AcompanhamentoComponent;
}());
exports.AcompanhamentoComponent = AcompanhamentoComponent;
//# sourceMappingURL=acompanhamento.component.js.map