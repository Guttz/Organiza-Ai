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
var material_1 = require("@angular/material");
var http_1 = require("@angular/common/http");
var material_2 = require("@angular/material");
var HistoricoComponent = /** @class */ (function () {
    function HistoricoComponent(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.searchIn = ["", "", "", "", "", ""];
        //url = "http://localhost:3000"
        //url = "http://localhost"
        this.url = "http://myas.com.br";
        this.ELEMENT_DATA = [];
        this.displayedColumns = ['cpf', 'nome', 'telPrimario', 'status', 'data', 'valorFinal'];
        this.dataSource = new material_1.MatTableDataSource(this.ELEMENT_DATA);
        this.dataCurrent = new material_1.MatTableDataSource(this.ELEMENT_DATA);
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
            _this.dataSource = new material_1.MatTableDataSource(_this.ELEMENT_DATA);
            _this.dataCurrent = new material_1.MatTableDataSource(_this.ELEMENT_DATA);
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
            this.dataCurrent = new material_1.MatTableDataSource(this.dataCurrent.filteredData);
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
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], HistoricoComponent.prototype, "paginator", void 0);
    HistoricoComponent = __decorate([
        core_1.Component({
            selector: 'my-historico',
            templateUrl: './historico.component.html',
            styleUrls: ['./historico.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, material_2.MatDialog])
    ], HistoricoComponent);
    return HistoricoComponent;
}());
exports.HistoricoComponent = HistoricoComponent;
var HistoricPopupComponent = /** @class */ (function () {
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
        core_1.Component({
            selector: 'historico-popup',
            templateUrl: './historico-popup.html',
            styleUrls: ['./historico-popup.scss']
        }),
        __param(1, core_1.Inject(material_2.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_2.MatDialogRef, Object])
    ], HistoricPopupComponent);
    return HistoricPopupComponent;
}());
exports.HistoricPopupComponent = HistoricPopupComponent;
//# sourceMappingURL=historico.component.js.map