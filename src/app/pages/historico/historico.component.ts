import { Component, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'my-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HistoricoComponent implements OnInit {

searchIn: Array<string> = ["", "", "", "", "", ""];

//url = "http://localhost:3000"
//url = "http://localhost"
url = "https://myas.com.br"

ELEMENT_DATA: Element[] = [
];

  auxData: any;

  displayedColumns = ['ordServ', 'cpf', 'nome', 'telPrimario', 'status', 'data'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  dataCurrent = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient, public dialog: MatDialog){

    if(window.location.href.match(/www/) != null){
      console.log("das me: " + window.location.href);
         this.url = "https://www.myas.com.br";
       }
      else{
        if(window.location.href.match(/local/) != null){
           this.url = "https://localhost";
         }
         else{
           this.url = "https://myas.com.br";
         }
         
     }
       

  }

    ngAfterViewInit() {
    this.dataCurrent.paginator = this.paginator;
  }

  ngOnInit() {
      //this.ELEMENT_DATA.push(curel);

    this.http.get(this.url + '/api/get_all_finalizados').subscribe(data => {
      //Agora todos os dados estao na variavel data
      this.auxData = data;

      for (var i = 0; i < this.auxData.length; i++) {
          //var currentElement = {cpf: this.auxData[i].cpf, nome: this.auxData[i].nome, telPrimario: this.auxData[i].telPrimario, status: "Finalizado", faturamento: new Date(this.auxData[i].data).getDay() + "/"+ (new Date(this.auxData[i].data).getMonth()+1) + "/" + new Date(this.auxData[i].data).getFullYear(), preco: this.auxData[i].valorFinal };
          this.auxData[i].status = "Finalizado";
          this.ELEMENT_DATA.push(this.auxData[i]);
      }

      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataCurrent = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataCurrent.paginator = this.paginator;
      this.dataSource.paginator = this.paginator;
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
  
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataCurrent.filter = filterValue;
    //this.dataSource = new MatTableDataSource(this.dataSource.filteredData);
  }

  blured(){
    this.dataCurrent = this.dataSource;
    for (var i = 0; i < this.searchIn.length; i++) {
      this.searchIn[i] = this.searchIn[i].trim(); // Remove whitespace
      this.searchIn[i] = this.searchIn[i].toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataCurrent.filter = this.searchIn[i];
      this.dataCurrent = new MatTableDataSource(this.dataCurrent.filteredData);
      this.dataCurrent.paginator = this.paginator; 
    }
  }

  cellClicked(CPF){
    for (var i = 0; i < this.dataCurrent.data.length; i++) {
      if(this.dataCurrent[i].cpf == CPF){
          
      }
    }
  }

    openDialogHistorico(index): void {

    let dialogRef = this.dialog.open(HistoricPopupComponent, {
      width: '60vw',
      data: this.dataCurrent.filteredData[index]
      //data: { cliente : this.dataCurrent.filteredData[0].cliente, cpf : this.dataCurrent.filteredData[0].cpf, defeito : this.dataCurrent.filteredData[0].defeito,  //name: this.name, animal: this.animal
       //}
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed' + result );
      
    });
  }

  teste(input){
    console.log(input);
    console.log(this.dataCurrent.filteredData[input]);
  }

}

export interface Element {
  ordServ: string;
  cpf: string;
  defeito: string;
  nome: string;
  status: string;
  telPrimario: string;
  data: Date;
  periodo: string;
  endereco: string;
  marca: string;
  modelo: string;
  telSecundario: string;
  email: string;
  realizado: string;
  pecas: string;
  servico: string;
  maoObra: string;
  valorFinal: string;
  metPag: string;
/*  rc: number;
  comprador: string;
  pedido: number;
  nomeFornecedor: string;
  data: string;
  requisitante: string;
  nomeComprador: string;*/
}

@Component({
  selector: 'historico-popup',
  templateUrl: './historico-popup.html',
  styleUrls: ['./historico-popup.scss']
})
export class HistoricPopupComponent implements OnInit {

constructor(
    public dialogRef: MatDialogRef<HistoricPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

