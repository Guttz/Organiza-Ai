import { Component, OnInit, Inject } from '@angular/core';
import { CardSchema } from '../../common_components/schemas/cardSchema';
import { CardStore } from '../../common_components/schemas/cardStore';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OrcaDataService } from '../../services/orca-data.service';


@Component({
  selector: 'app-cliente-atender',
  templateUrl: './cliente-atender.component.html',
  styleUrls: ['./cliente-atender.component.scss']
})
export class ClienteAtenderComponent implements OnInit {
    periodos = [
    {value: 'Manhã'},
    {value: 'Tarde'}
  ];

  reducedID;
  
constructor(public dialogRef: MatDialogRef<ClienteAtenderComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
 private ordaDataService: OrcaDataService) {
      this.reducedID = this.data.bd_id.substring(17, 24);
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
export class AtendimentoComponent implements OnInit {
    periodos = [
    {value: 'Débito'},
    {value: 'Crédito'},
    {value: 'Cheque'},
    {value: 'Dinheiro'},
  ];

 reducedID;

constructor(public dialogRef: MatDialogRef<AtendimentoComponent>, @Inject(MAT_DIALOG_DATA) public data: any, 
 private ordaDataService: OrcaDataService) {
  this.reducedID = this.data.bd_id.substring(17, 24);
}
 

onNoClick(): void 
{
    this.dialogRef.close();
    
  }

  thermalPrintAguardando(): void{
    var document = '<html> <body onload="window.print()"> <h3 style="display: inline-block" >Ordem de serviço</h3> <img style="display: inline-block; padding-left: 110px;" src="assets/images/logo-name75.png"> <br>\
    <span> <strong> N° Ordem: </strong>'+ this.data.bd_id.substring(17, 24) +'</span> <span>&nbsp &nbsp <strong> Cliente:</strong> '+ this.data.nome +'</span> <span>&nbsp &nbsp <strong>Data:</strong> '+ this.data.dia + "/"+ this.data.mes +'</span> <br> <br> \
     <span><strong>Telefone:</strong> '+ this.data.telPrimario +'</span> <span>&nbsp &nbsp <strong>Marca:</strong> '+ this.data.marca +'</span> <span>&nbsp &nbsp <strong>Modelo:</strong> '+ this.data.modelo +'</span> <br> <br> \
    <span><strong>Defeito:</strong> '+ this.data.defeito +'</span> <br> <br> \
    <span><strong>Observações: </strong> '+ this.data.observacoes + '</span> <span style="float: right;"> __________________________ </span> </body> </html>';

    console.log(this.data);     
     var w = window.open("");
     w.document.write(document);    
  };

  ngOnInit() {
  }
}

@Component({
  selector: 'my-acompanhamento',
  templateUrl: './acompanhamento.component.html',
  styleUrls: ['./acompanhamento.component.scss']
})

export class AcompanhamentoComponent implements OnInit {
	cardStore: CardStore;
  lists: ListSchema[];
  animal: string;
  name: string;

  auxData: any;

  //url = "http://localhost";
  //url = "http://ec2-54-210-153-102.compute-1.amazonaws.com:80";
  url = "http://myas.com.br"
  
  //List names for the backend requests be directly to the right collection
  listsNames = ["orca", "atendimento", "agPecas", "rtVisita", "pagamento"];

  constructor(private http: HttpClient, public dialog: MatDialog) {
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
  }

  ngOnInit() {
    //Initializing the page
    this.lists = this.ordaDataService.getOrcasList();
  }

  
   openDialogAtender(newList, oldList, cardID): void {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(ClienteAtenderComponent, {
      width: '44vw',
      data: { marca: card.marca, defeito: card.defeito, modelo: card.modelo, data: card.data, periodo: card.periodo }
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null){
        //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list
        this.sortByDate(newList, oldList, cardID);

        //Associando as propriedades para enviar o json certinho
          result.bd_id = card.bd_id;
          card.defeito = result.defeito;
          card.marca =  result.marca;
          card.modelo = result.modelo;
          card.data = result.data;
          card.periodo = result.periodo;
          
          //Atualizando o card na store com as novas informações dele
          this.cardStore.updateCard(cardID, card);

          //Send the req to the backend to update the orca
            this.http.post(this.url + '/api/add_atendimento', card)
            .subscribe(
              res => { 
                  this.http.post(this.url + '/api/remove_orca', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }
    });
  }

  clickOrcamento(idCard, idList): void {

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


  clickVisited(idCard, idList): void {
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

  openDialogFinalizado(newList, oldList, cardID): void {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
      data: card
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null){
        //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list
        this.sortByDate(newList, oldList, cardID);

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
          
          //Atualizando o card na store com as novas informações dele
          this.cardStore.updateCard(cardID, card);

          //Send the req to the backend to update the orca
            this.http.post(this.url + '/api/add_finalizado', card)
            .subscribe(
              res => { 
                  this.http.post(this.url + '/api/remove_atendimento', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

                  this.http.post(this.url + '/api/remove_agPecas', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

                  this.http.post(this.url + '/api/remove_rtVisita', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

                  this.http.post(this.url + '/api/remove_pagamento', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }
    });
  }

  openDialogrtVisita(newList, oldList, cardID): void {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
     data: card
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null){
        //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list
        this.sortByDate(newList, oldList, cardID);

        //Associando as propriedades para enviar o json certinho
          card.realizado = result.realizado;
          card.pecas =  result.pecas;
          card.servico = result.servico;
          card.maoObra = result.maoObra;
          card.valorFinal = result.valorFinal;
          card.metPag = result.metPag;
          
          //Atualizando o card na store com as novas informações dele
          this.cardStore.updateCard(cardID, card);

          //Send the req to the backend to update the orca
            this.http.post(this.url + '/api/add_rtVisita', card)
            .subscribe(
              res => { 
                  this.http.post(this.url + '/api/remove_atendimento', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

                  this.http.post(this.url + '/api/remove_agPecas', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }
    });
  }

   openDialogagPecas(newList, oldList, cardID): void {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
      data: card
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null){
        //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list
        this.sortByDate(newList, oldList, cardID);

        //Associando as propriedades para enviar o json certinho
          card.realizado = result.realizado;
          card.pecas =  result.pecas;
          card.servico = result.servico;
          card.maoObra = result.maoObra;
          card.valorFinal = result.valorFinal;
          card.metPag = result.metPag;
          
          //Atualizando o card na store com as novas informações dele
          this.cardStore.updateCard(cardID, card);

          //Send the req to the backend to update the orca
            this.http.post(this.url + '/api/add_agPecas', card)
            .subscribe(
              res => { 
                  this.http.post(this.url + '/api/remove_atendimento', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );
              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }
    });
  }

  openDialogPagamento(newList, oldList, cardID): void {
   //Get the card with the card id
   var card = this.cardStore.getCard(cardID);

   //Open the pop up with the card infos
   let dialogRef = this.dialog.open(AtendimentoComponent, {
      width: '44vw',
      data: card
    });

   //After the dialog is closed thats the called function
    dialogRef.afterClosed().subscribe(result => {
      
      //In case the user pressed confirm
      if(result!=null){
        //Remove the card from the old list and insert in the new while sorting by the date the cards in the new list
        this.sortByDate(newList, oldList, cardID);

        //Associando as propriedades para enviar o json certinho
          card.realizado = result.realizado;
          card.pecas =  result.pecas;
          card.servico = result.servico;
          card.maoObra = result.maoObra;
          card.valorFinal = result.valorFinal;
          card.metPag = result.metPag;
          
          //Atualizando o card na store com as novas informações dele
          this.cardStore.updateCard(cardID, card);

          //Send the req to the backend to update the orca
            this.http.post(this.url + '/api/add_pagamento', card)
            .subscribe(
              res => { 
                  this.http.post(this.url + '/api/remove_atendimento', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

                  this.http.post(this.url + '/api/remove_agPecas', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

                  this.http.post(this.url + '/api/remove_rtVisita', card )
                  .subscribe(
                    res => { 

                    },
                    err => {
                      console.log("Error occured: " + err.error.message);
                    }
                  );

              },
              err => {
                console.log("Error occured: " + err.error.message);
              }
            );

      }
    });
  }

  clicked(event){
  let target = event.target;

    //Loop trought the parent html element until get to the list it was dropped on
    while (target.className !== 'list') {
      target = target.parentNode;
    }

    //The list ID, the one that the card is being clicked
    var listID = parseInt(target.id.substring(1,2));

    //Checking if is the "finalizado" column so a pop up wont be oppened
    if(listID == 5){
      return;
    }
    if(listID == 0 || listID == 1){
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

    console.log("cardNlist" + cardNlist);
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

    //If the list is dropped from the first list to the second
    if(oldList == 0 && newList == 1){
        this.openDialogAtender(newList, oldList, cardID);
    }

    //If the list is dropped from the second list to the third
    if(oldList == 1 && newList == 2){
        this.openDialogagPecas(newList, oldList, cardID);
    }

    //If the list is dropped from the second list to the third
    if(oldList == 1 && newList == 3){
        this.openDialogrtVisita(newList, oldList, cardID);
    }

        //If the list is dropped from the second list to the third
    if(oldList == 2 && newList == 3){
        this.openDialogrtVisita(newList, oldList, cardID);
    }

    //If the list is dropped from the second list to the third
    if( (oldList == 1 || oldList == 2 || oldList == 3) && newList == 4 ){
        this.openDialogPagamento(newList, oldList, cardID);
    }

    //If the list is dropped from the second list to the third
    if( (oldList == 1 || oldList == 2 || oldList == 3 || oldList == 4)  && newList == 5){
        this.openDialogFinalizado(newList, oldList, cardID);
    }

  }

   sortByDate(newList, oldList, cardID){
    //Control vriable
    var inserted = false;

    //The list lenght to run over
    var listLenght = this.lists[newList].cards.length;
      
    //Creating the counting variable outside the loop so it can be used by the insert later    
    var i;

    //Loop to find out where to put the end card, that will be ordered by date
    for (i = 0; i < listLenght; i++) {

        //If the data of the card if < or = the card currently selected by the I inside the new lists cards, then insert the card in this position
        if(this.cardStore.getCard(cardID).data <= this.cardStore.getCard( this.lists[newList].cards[i] ).data){
              
              //Inserting the card in the right position and setting as an inserted card so it won't be included again in the last position
              this.lists[newList].cards.splice(i, 0, cardID );
              inserted = true;
              break;
          }
      }

      //Checking if the card was eventually inserted in the middle of the cards
      if(!inserted){
        this.lists[newList].cards.splice(i, 0, cardID );
      }
      
      //Removing from the old list
      this.lists[oldList].cards.splice( this.lists[ oldList ].cards.indexOf(cardID), 1);
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
