import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'my-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

ELEMENT_DATA: Element[] = [
    {id: 1, cliente: 'Gustavo Morais', telefone: 41997919187, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00") , faturamentoString: '' , preco: 999 },
  {id: 2, cliente: 'Morais Gustavo', telefone: 41997919186, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33") , faturamentoString: '' , preco: 450 },
    {id: 1, cliente: 'Gustavo Morais', telefone: 41997919185, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00") , faturamentoString: '' , preco: 999 },
  {id: 2, cliente: 'Morais Gustavo', telefone: 41997919187, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33") , faturamentoString: '' , preco: 450 },
    {id: 1, cliente: 'Gustavo Morais', telefone: 41997919187, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00") , faturamentoString: '' , preco: 999 },
  {id: 2, cliente: 'Morais Gustavo', telefone: 41997919187, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33") , faturamentoString: '' , preco: 450 },
    {id: 1, cliente: 'Gustavo Morais', telefone: 41997919187, status: 'Finalizado', faturamento: new Date("September 13, 2014 11:13:00") , faturamentoString: '' , preco: 999 },
  {id: 2, cliente: 'Morais Gustavo', telefone: 41997919187, status: 'Ativo', faturamento: new Date("August 22, 2015 03:59:33") , faturamentoString: '' , preco: 450 },
];

  constructor() {  }

  ngOnInit() {

  	for (var i = 0; i < this.ELEMENT_DATA.length; i++) {
  		ELEMENT_DATA_PRECOS.push(( (this.ELEMENT_DATA[i].preco)/100).toFixed(2)); 

  		if(this.ELEMENT_DATA[i].faturamento.getMonth() <= 8){
  			this.ELEMENT_DATA[i].faturamentoString = this.ELEMENT_DATA[i].faturamento.getDate().toString() + "/0" + (this.ELEMENT_DATA[i].faturamento.getMonth() + 1).toString() + "/" + this.ELEMENT_DATA[i].faturamento.getFullYear().toString();
  		}
  		else{
  			this.ELEMENT_DATA[i].faturamentoString = this.ELEMENT_DATA[i].faturamento.getDate().toString() + "/" + (this.ELEMENT_DATA[i].faturamento.getMonth() + 1).toString() + "/" + this.ELEMENT_DATA[i].faturamento.getFullYear().toString();
  		}	
  	} 
  
  }

  displayedColumns = ['id', 'cliente', 'telefone', 'status', 'faturamento', 'preco'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

export interface Element {
  cliente: string;
  id: number;
  telefone: number;
  status: string;
  faturamento: Date;
  faturamentoString: String;
  preco: number;
}

var ELEMENT_DATA_PRECOS = [];


