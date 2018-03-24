import { Component, OnInit, Inject } from '@angular/core';
import { Card } from '../../common_components/schemas/card';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrcaDataService } from '../../services/orcaData/orca-data.service';
import { UserSettingsService } from '../../services/userSettings/userSettings.service';
import { Observable } from 'rxjs/Rx';

/*----------------------------------ClienteAtenderComponent--------------------------------------*/

@Component({
  selector: 'app-cliente-atender',
  templateUrl: './cliente-atender/cliente-atender.component.html',
  styleUrls: ['./cliente-atender/cliente-atender.component.scss']
})

export class ClienteAtenderComponent implements OnInit 
{
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

}

/*----------------------------------AtendimentoComponent-----------------------------------------*/
@Component({
  selector: 'my-atendimento',
  templateUrl: '/atendimento/atendimento.component.html',
  styleUrls: ['/atendimento/atendimento.component.scss']
})

export class AtendimentoComponent implements OnInit 
{
  metPag = [
    {value: 'Débito'},
    {value: 'Crédito'},
    {value: 'Cheque'},
    {value: 'Dinheiro'},
  ];

  reducedID;
  options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit',
             minute: '2-digit', second: '2-digit' };

  constructor(public dialogRef: MatDialogRef<AtendimentoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ordaDataService: OrcaDataService) 
  {
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

    this.data.valorFinal = Number(value1) + Number(value2);
  }


  onNoClick(): void 
  {
    this.dialogRef.close();    
  }

  deleteCard(): void
  {
    var card = new Card();
    card.init(this.data);
    this.ordaDataService.removeCardDB(card, this.data.listID);
    this.ordaDataService.removeCardFront(card, this.data.listID);
    this.dialogRef.close();
  }

  thermalPrintAguardando(): void{
    if(this.reducedID == undefined)
      this.reducedID = "";
    if(this.data.data == undefined)
      this.data.data = "";
    if(this.data.nome == undefined)
      this.data.nome = "";
    if(this.data.telPrimario == undefined)
      this.data.telPrimario = "";
    if(this.data.email == undefined)
      this.data.email = "";
    if(this.data.marca == undefined)
      this.data.marca = "";
    if(this.data.imei == undefined)
      this.data.imei = "";
    if(this.data.observacoes == undefined)
      this.data.observacoes = "";
    if(this.data.defeito == undefined)
      this.data.defeito = "";
    if(this.data.realizado == undefined)
      this.data.realizado = "";
    if(this.data.pecas == undefined)
      this.data.pecas = "";
    if(this.data.servico == undefined)
      this.data.servico = "";
    if(this.data.maoObra == undefined)
      this.data.maoObra = "";
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
    <span>'+ this.data.observacoes + "" +'\
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

 
  ngOnInit() 
  {
  }
}

/*----------------------------------AtendimentoComponent-----------------------------------------*/
@Component({
  selector: 'my-atendimento',
  templateUrl: '/finalizado/finalizado.component.html',
  styleUrls: ['/finalizado/finalizado.component.scss']
})

export class AtendimentoFinalizadoComponent implements OnInit 
{
  metPag = [
    {value: 'Débito'},
    {value: 'Crédito'},
    {value: 'Cheque'},
    {value: 'Dinheiro'},
  ];

  reducedID;
  options = { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit',
             minute: '2-digit', second: '2-digit' };

  constructor(public dialogRef: MatDialogRef<AtendimentoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ordaDataService: OrcaDataService) 
  {
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

    this.data.valorFinal = Number(value1) + Number(value2);
  }


  onNoClick(): void 
  {
    this.dialogRef.close();    
  }

  deleteCard(): void
  {
    var card = new Card();
    card.init(this.data);
    this.ordaDataService.removeCardDB(card, this.data.listID);
    this.ordaDataService.removeCardFront(card, this.data.listID);
    this.dialogRef.close();
  }

  thermalPrintAguardando(): void{
    if(this.reducedID == undefined)
      this.reducedID = "";
    if(this.data.data == undefined)
      this.data.data = "";
    if(this.data.nome == undefined)
      this.data.nome = "";
    if(this.data.telPrimario == undefined)
      this.data.telPrimario = "";
    if(this.data.email == undefined)
      this.data.email = "";
    if(this.data.marca == undefined)
      this.data.marca = "";
    if(this.data.imei == undefined)
      this.data.imei = "";
    if(this.data.observacoes == undefined)
      this.data.observacoes = "";
    if(this.data.defeito == undefined)
      this.data.defeito = "";
    if(this.data.realizado == undefined)
      this.data.realizado = "";
    if(this.data.pecas == undefined)
      this.data.pecas = "";
    if(this.data.servico == undefined)
      this.data.servico = "";
    if(this.data.maoObra == undefined)
      this.data.maoObra = "";
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
    <span>'+ this.data.observacoes + "" +'\
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

 
  ngOnInit() 
  {
  }
}



/*----------------------------------AcompanhamentoComponent---------------------------------------*/
@Component({
  selector: 'my-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})

export class AcompanhamentoComponent implements OnInit 
{
  lists: ListSchema[];
  animal: string;
  name: string;

  auxData: any;

  //url = "http://localhost";
  //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
  url = "http://myas.com.br"
  
  //List names for the backend requests be directly to the right collection
  listsNames = ["atendimento", "agPecas", "rtVisita", "pagamento", "finalizado"];
  listSize: number;
  //All the ids of lists that will not popup when clicked
  listNoPopUp = [];
  //All the ids of lists that will no move with the dropFunction
  listNoMove = [4];

  constructor(private http: HttpClient, public dialog: MatDialog, 
   private ordaDataService: OrcaDataService) 
  {
    const aux = this.listsNames.length;
    this.listSize = aux;
    this.ordaDataService.getOrcasList().subscribe(lists => this.lists = lists);
  }

  ngOnInit() {
    
  }

  public clicked(event)
  {
    let target = event.target;

    //If the clicked element is not a card, return and dont pop up anything
    if(!Number.isInteger( parseInt(event.target.id)))
    {
      return;
    }
    
    //Loop trought the parent html element until get to the list it was dropped on
    while (target.className !== 'list') {
      target = target.parentNode;
    }

    //The list ID, the one that the card is being clicked
    var listID = target.id;

    //Checking if is the "finalizado" column so a pop up wont be oppened
    if(listID >= this.listSize){
      console.log("Erro você clicou em uma coluna que não existe.")
      return;
    }

    if(this.listNoPopUp.includes(listID))
    {
      console.log("Essa coluna não pode exibir popups.");
      return;
    }

    if(listID == 0 ){
      this.clickOrcamento(event.target.id, listID);
    }
    if(listID == 4){
      this.clickFinalizado(event.target.id, listID);
    }
    else{
      this.clickVisited(event.target.id, listID);
    }
  }

  drop($event) 
  {
  
    //The target element that the card was dropped on
    let target = $event.target;

    //Get from the the dom transfer the id of the card that was transfered and the list it came from
    let cardNlist = $event.dataTransfer.getData('text');

    //Loop trought the parent html element until get to the list it was dropped on
    while (target.className !== 'list') {
      target = target.parentNode;
    }

    //The one it came from
    var fromList = parseInt( cardNlist.substring(0,1) );

    //The one that the card is being dropped
    var toList = target.id;

    //The card that is being dropped id from the cardStore
    var ordServ = cardNlist.substring(1,cardNlist.length);

    //If the list the card is being dropped is the same if came from just return and do nothing
    if(fromList == toList)
    {
      console.log("Você tentou mover um card para propria coluna.");
      return;
    }

    if(this.listNoMove.includes(fromList))
    {
      console.log("Você esta tentando mover uma lista com movimento bloqueado.");
      return;
    }

    this.moveCard(ordServ, fromList, toList);

  }
  private getCard(ordServ: string, listID: number): Card
  {
    var card = null;

    //Searching the clicked card on the list
    for (var i = 0; i < this.lists[listID].cards.length; i++) 
    {
      if(this.lists[listID].cards[i].getOrdServ() == ordServ)
      {
        card = this.lists[listID].cards[i];  
        break;
      }
    }

    if( card == null)
    {
      console.log("Não foi possivel achar o cartão de ordServ " + ordServ + " na lista " + listID+ ".");
      return null;
    }
    return card;
  }

  clickOrcamento(ordServ: string, listID: number): void 
  {
    var card = this.getCard(ordServ, listID);
    if(card == null)
      return;

    let dialogRef = this.dialog.open(ClienteAtenderComponent, {
      width: '44vw',
      data: card
    });

    dialogRef.afterClosed().subscribe(result => {
      //Result is a json of all form data
      if(result!=null)
      {
        //Relating the result information with the card information
        card.defeito = result.defeito;
        card.marca =  result.marca;
        card.modelo = result.modelo;
        card.data = result.data;
        card.observacoes = result.observacoes;
        card.updateCard(card.getJson());

        //Sending this update to service
        this.ordaDataService.addAndRemove(card, listID, listID);
      }

    });
  }

  clickVisited(ordServ: string, listID: number): void 
  {
    var card = this.getCard(ordServ, listID);
      if(card == null)
        return;

    var aux = Object();
    aux = card;
    aux.listID = listID;
    //Open the pop up with the card infos
    let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
      data: aux
    });

    //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null)
      {
        //Relating the result information with the card information
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

        //Sending this update to service
        this.ordaDataService.addAndRemove(card, listID, listID);
      }
    });
  }

  clickFinalizado(ordServ: string, listID: number): void 
  {
    var card = this.getCard(ordServ, listID);
      if(card == null)
        return;

    //Open the pop up with the card infos
    let dialogRef = this.dialog.open(AtendimentoFinalizadoComponent, {
      width: '44vw',
      data: card
    });

    //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  moveCard(ordServ: string, fromList: number, toList: number)
  {
    var card = this.getCard(ordServ, fromList);
    if(card == null)
      return;

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
        //Relating the result information with the card information
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
        //Sending this update to service
        this.ordaDataService.addAndRemove(card, fromList, toList);
      }
    });
  }

}


