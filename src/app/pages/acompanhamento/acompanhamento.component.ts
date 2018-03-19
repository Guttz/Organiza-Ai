import { Component, OnInit, Inject } from '@angular/core';
import { CardSchema } from '../../common_components/schemas/cardSchema';
import { CardStore } from '../../common_components/schemas/cardStore';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrcaDataService } from '../../services/orcaData/orca-data.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-cliente-atender',
  templateUrl: './cliente-atender/cliente-atender.component.html',
  styleUrls: ['./cliente-atender/cliente-atender.component.scss']
})


export class ClienteAtenderComponent implements OnInit 
{
  periodos = [ {value: 'Manhã'}, {value: 'Tarde'} ];
  reducedID;
  
  constructor(public dialogRef: MatDialogRef<ClienteAtenderComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.reducedID = this.data.ordServ.substring(17, 24);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

    thermalPrintVisao(): void{
    var w = window.open();
    w.document.write("Pagina de visao do tecnicoaa <br> " + this.data.defeito);
    w.print();
    w.close();
  };
}

@Component({
  selector: 'my-atendimento',
  templateUrl: '/atendimento/atendimento.component.html',
  styleUrls: ['/atendimento/atendimento.component.scss']
})

export class AtendimentoComponent implements OnInit 
{
  periodos = [
    {value: 'Débito'},
    {value: 'Crédito'},
    {value: 'Cheque'},
    {value: 'Dinheiro'},
  ];

  reducedID;
  options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };

  constructor(public dialogRef: MatDialogRef<AtendimentoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.reducedID = this.data.ordServ.substring(17, 24);
  }
 
    sumTotalValue()
  {
    var value1, value2;
    if(this.data.servico != null)
      value1 = (this.data.servico).replace(",", ".");
    else
      value1 = 0;
    if(this.data.pecas != null)
      value2 = (this.data.pecas).replace(",", ".");
    else
      value2 = 0;

    this.data.valorFinal = Number(value1) +Number(value2);
  }


  onNoClick(): void 
  {
    this.dialogRef.close();    
  }

  thermalPrintAguardando(): void{
    var document = '<html>\
    <div style="width: 235px; word-wrap: break-word;">\
    <body onload="window.print()"> <h4 style="display: inline-block" >Ordem de serviço</h4> <img style="display: inline-block; padding-left: 10px;" src="assets/images/logo-nameOS.png"> <br>\
    <span style="font-size: 12px;"> <strong> N° Ordem: </strong>'+ this.reducedID + ' </span> <br> \
    <span style="font-size: 12px;"><strong>Data:</strong> '+ this.data.data.toLocaleDateString("pt-BR", this.options) +'</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span style="font-size: 12px;"> <strong> Cliente:</strong> '+ this.data.nome +'</span> <br>\
    <span><strong>Telefone:</strong> '+ this.data.telPrimario +'</span> <br> \
    <span style="font-size: 12px;"> <strong> Email:</strong> '+ this.data.email +'</span> <br>\
    <span style="font-size: 12px;">_______________________________________<br>\
    <span style="font-size: 12px;"> <strong> Marca/modelo:</strong> '+ this.data.marca +'</span> <span style="font-size: 12px;">'+ this.data.modelo +'</span> <br>\
    <span><strong>Imei:</strong> '+ this.data.imei +'</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Observações/Senha:</strong></span> <br> \
    <div style="width: 135px; display: inline-block;"> \
    <span>'+ this.data.observacoes + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +'\
    </div> \
    <div style="width: 90px; display: inline-block; background: green;">\
    <img style="display: inline-block;" src="assets/images/lockscreen.png">\
    </div> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Problema relatado:</strong> '+ this.data.defeito +'</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Serviços realizados:</strong> '+ this.data.realizado +'</span> <br> \
    <span style="font-size: 12px;">_______________________________________<br>\
    <span><strong>Valor peças:</strong> '+ this.data.pecas +'</span> <br> \
    <span><strong>Valor servico:</strong> '+ this.data.servico +'</span> <br> \
    <span><strong>Técnico Responsável:</strong> '+ this.data.maoObra +'</span> <br> <br> <br>\
    <span style="font-size: 12px; padding-left: 44px;">__________________________<br>\
    <span style="padding-left: 73px;"><strong>Assino e concordo</strong></span> <br> \
    </div> '

    console.log(this.data);     
     var w = window.open("");
     w.document.write(document);
     //w.print();    
  };

  //<span> <strong> Observações/senha: </strong>'+ this.data.observacoes + "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" +'</span>\
  //    <span style><strong>Observações/senha: </strong> '+ this.data.observacoes + '</span> <span style="float: right;"> __________________________ </span> </body> </html>';

  ngOnInit() {
  }
}

@Component({
  selector: 'my-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})

export class AcompanhamentoComponent implements OnInit 
{
	cardStore: CardStore;
  lists: ListSchema[];
  animal: string;
  name: string;

  auxData: any;

  //url = "http://localhost";
  //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
  url = "http://myas.com.br"
  
  //List names for the backend requests be directly to the right collection
  listsNames = ["atendimento", "agPecas", "rtVisita", "pagamento", "finalizado"];

  constructor(private http: HttpClient, public dialog: MatDialog, 
   private ordaDataService: OrcaDataService) 
  {
    if(window.location.href.match(/www/) != null){
      console.log("das me: " + window.location.href);
         this.url = "http://www.myas.com.br";
       }
      else{
        if(window.location.href.match(/local/) != null){
           this.url = "http://localhost";
         }
         else{
           this.url = "http://myas.com.br";
         }
         
       }  

    this.ordaDataService.getOrcasList().subscribe(lists => this.lists = lists);
    this.ordaDataService.getCardStore().subscribe(cardStore => this.cardStore = cardStore);
  }

  ngOnInit() {
    
  }
  clickOrcamento(idCard, idList): void 
  {

    var card = this.cardStore.getCard(idCard);

    console.log(card);

    let dialogRef = this.dialog.open(ClienteAtenderComponent, {
      width: '44vw',
      data: card
    });

    dialogRef.afterClosed().subscribe(result => {
      
      //console.log('The dialog was closed' + result.defeito );

      //Dando ruim com alterações consecutivas
      if(result!=null){
          result.bd_id = card.bd_id;
          card.defeito = result.defeito;
          card.marca =  result.marca;
          card.modelo = result.modelo;
          card.data = result.data;
          card.periodo = result.periodo;
          card.observacoes = result.observacoes;
          this.cardStore.updateCard(idCard, card);

            const req = this.http.post(this.url + '/api/update_' + this.listsNames[idList], result)
            .subscribe(
              res => {

                console.log("");
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }

    });
  }

  clickVisited(idCard, idList): void 
  {
   //Get the card with the card id
   var card = this.cardStore.getCard(idCard);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
      data: card
    });

   console.log("meu card:" + card.modelo);

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null){
        //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list

        //Associando as propriedades para enviar o json certinho
          result.bd_id = card.bd_id;
          card.defeito = result.defeito;
          card.marca =  result.marca;
          card.modelo = result.modelo;
          card.realizado = result.realizado;
          card.pecas =  result.pecas;
          card.servico = result.servico;
          card.maoObra = result.maoObra;
          card.valorFinal = result.valorFinal;
          card.metPag = result.metPag;
          card.observacoes = result.observacoes;
          
          //Atualizando o card na store com as novas informações dele
          this.cardStore.updateCard(idCard, card);

          //Send the req to the backend to update the orca
            const req = this.http.post(this.url + '/api/update_' + this.listsNames[idList], result)
            .subscribe(
              res => {

                console.log("");
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }
    });
  }

  openDialogFinalizado(cardID): void 
  {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   if(card == undefined)
   {
     console.log("Problamas ao obter o card.");
     return;
   }

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
      data: card
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => 
    {
      
      //In case the user pressed confirm
      if(result!=null)
      {

        //Associando as propriedades para enviar o json certinho
        card.defeito = result.defeito;
        card.marca =  result.marca;
        card.modelo = result.modelo;
        card.realizado = result.realizado;
        card.pecas =  result.pecas;
        card.servico = result.servico;
        card.maoObra = result.maoObra;
        card.valorFinal = result.valorFinal;
        card.metPag = result.metPag;
        card.observacoes = result.observacoes;

        var commandRemove = '';
        //Getting the current list of the card
        var currentStatus = this.ordaDataService.whichList(card.id);

        if(currentStatus.listID == -1 ||currentStatus.listID >= 4)
        {
          console.log("Ocorreu um erro ao mover o cartão.");
          return;
        }
        else
        {
          commandRemove = '/api/remove_' + this.listsNames[currentStatus.listID];
        }
        if(!this.ordaDataService.addAndRemove('/api/add_finalizado',commandRemove, card ))
        {     
          console.log("Ocorreu um erro na função addAndRemove.");
        }
      }
    });
  }

  openDialogrtVisita(cardID): void 
  {
    //Get the card with the card id
    var card = this.cardStore.getCard(cardID);
    if(card == undefined)
    {
      console.log("Problamas ao obter o card.");
      return;
    }
    //Open the pop up with the card infos
    let dialogRef = this.dialog.open(AtendimentoComponent, 
    {
      width: '44vw',
      data: card
    });

    //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => 
    {      
      //In case the user pressed confirm
      if(result!=null)
      {
        //Associando as propriedades para enviar o json certinho
        card.realizado = result.realizado;
        card.pecas =  result.pecas;
        card.servico = result.servico;
        card.maoObra = result.maoObra;
        card.valorFinal = result.valorFinal;
        card.metPag = result.metPag;
        card.observacoes = result.observacoes;

        var commandRemove = '';
        //Getting the current list of the card
        var currentStatus = this.ordaDataService.whichList(card.id);

        if(currentStatus.listID == -1 || currentStatus.listID >= 4)
        {
          console.log("Ocorreu um erro ao mover o cartão.");
          return;
        }
        else
        {
          commandRemove = '/api/remove_' + this.listsNames[currentStatus.listID];
        }
        if(!this.ordaDataService.addAndRemove('/api/add_rtVisita',commandRemove, card ))
        {     
          console.log("Ocorreu um erro na função addAndRemove.");
        }
      }
    });
  }

  openDialogagPecas(cardID): void 
  {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);
    if(card == undefined)
    {
      console.log("Problamas ao obter o card.");
      return;
    }
   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, 
   {
      width: '44vw',
      data: card
    });

    //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => 
    {
      
      //In case the user pressed confirm
      if(result!=null)
      {
        //Associando as propriedades para enviar o json certinho
        card.realizado = result.realizado;
        card.pecas =  result.pecas;
        card.servico = result.servico;
        card.maoObra = result.maoObra;
        card.valorFinal = result.valorFinal;
        card.metPag = result.metPag;
        card.observacoes = result.observacoes;

        var commandRemove = '';
        //Getting the current list of the card
        var currentStatus = this.ordaDataService.whichList(card.id);

        console.log(currentStatus);

        if(currentStatus.listID == -1 || currentStatus.listID >= 4)
        {
          console.log("Ocorreu um erro ao mover o cartão.");
          return;
        }
        else
        {
          commandRemove = '/api/remove_' + this.listsNames[currentStatus.listID];
        }
        if(!this.ordaDataService.addAndRemove('/api/add_agPecas',commandRemove, card ))
        {     
          console.log("Ocorreu um erro na função addAndRemove.");
        }
      }
    });
  }

  openDialogPagamento(cardID): void 
  {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, 
   {
      width: '44vw',
      data: card
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => 
    {
      
      //In case the user pressed confirm
      if(result!=null)
      {
        //Associando as propriedades para enviar o json certinho
        card.realizado = result.realizado;
        card.pecas =  result.pecas;
        card.servico = result.servico;
        card.maoObra = result.maoObra;
        card.valorFinal = result.valorFinal;
        card.metPag = result.metPag;
        
        var commandRemove = '';
        //Getting the current list of the card
        var currentStatus = this.ordaDataService.whichList(card.id);

        if(currentStatus.listID == -1 || currentStatus.listID >= 5)
        {
          console.log("Ocorreu um erro ao mover o cartão.");
          return;
        }
        else
        {
          commandRemove = '/api/remove_' + this.listsNames[currentStatus.listID];
        }
        if(!this.ordaDataService.addAndRemove('/api/add_pagamento',commandRemove, card ))
        {     
          console.log("Ocorreu um erro na função addAndRemove.");
        }
      }
    });
  }

  clicked(event){
    let target = event.target;

    //If the clicked element is not a card, return and dont pop up anything
    if(!Number.isInteger( parseInt(event.target.id))){
      return;
    }
    
    //Loop trought the parent html element until get to the list it was dropped on
    while (target.className !== 'list') {
      target = target.parentNode;
    }

    //The list ID, the one that the card is being clicked
    var listID = parseInt(target.id.substring(1,2));

    //Checking if is the "finalizado" column so a pop up wont be oppened
    if(listID >= 4){
      return;
    }
    if(listID == 0 ){
      this.clickOrcamento(event.target.id, listID);
    }
    else{
      this.clickVisited(event.target.id, listID);
    }

  }

  drop($event) {
  
    //The target element that the card was dropped on
    let target = $event.target;

    //Get from the the dom transfer the id of the card that was transfered and the list it came from
    let cardNlist = $event.dataTransfer.getData('text');

    //Loop trought the parent html element until get to the list it was dropped on
    while (target.className !== 'list') {
      target = target.parentNode;
    }

    //Old list ID, the one it came from
    var oldList = parseInt( cardNlist.substring(1,2) );

    //New list ID, the one that the card is being dropped
    var newList = parseInt(target.id.substring(1,2));

    //The card that is being dropped id from the cardStore
    var cardID = cardNlist.substring(2,cardNlist.length);

    //If the list the card is being dropped is the same if came from just return and do nothing
    if(oldList == newList){
      return;
    }

    if(oldList == 4){
      return;
    }
    //If the list is dropped from the second list to the third
    if(newList == 1){
      console.log("zb")
        this.openDialogagPecas(cardID);
    }

    //If the list is dropped from the second list to the third
    if(newList == 2){
      console.log("zc")
        this.openDialogrtVisita( cardID);
    }

    //If the list is dropped from the second list to the third
    if(newList == 3 ){
      console.log("ze")
        this.openDialogPagamento( cardID);
    }

    //If the list is dropped from the second list to the third
    if(newList == 4){
      console.log("zf")
        this.openDialogFinalizado(cardID);
    }

  }


}


//Definindo o que sera a resposta do getCards
interface ItemsResponse {
    cpf: string,
    defeito: string,
    marca: string,
    data: Date,
    modelo: string,
    periodo: string,
    nome: string,
    telPrimario: string,
    telSecundario: string,
    email: string,
    endereco: string,
    observacoes: string
}
