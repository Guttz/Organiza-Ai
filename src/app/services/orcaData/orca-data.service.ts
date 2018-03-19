import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardSchema } from '../../common_components/schemas/cardSchema';
import { CardStore } from '../../common_components/schemas/cardStore';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { SocketComunicator } from '../socketComunicator/socketComunicator.service';

@Injectable()
export class OrcaDataService {
	lists: ListSchema[];
	cardStore: CardStore;
	dataHolder: any;
	url = "http://myas.com.br";
  ioConnection: any;
  //List names for the backend requests be directly to the right collection
  listsNames = ["atendimentos", "agPecas", "rtVisita", "pagamento", "finalizados"];

  constructor(private http: HttpClient, private socketService: SocketComunicator) 
  { 
    socketService.initSocket();

    this.ioConnection = this.socketService.getChanges()
      .subscribe((message: string) => {
        //console.log("Houve um alteração, atualizando cards.");
        //console.log(message);
        var messageJson = JSON.parse(message);

        //Reloading the list with new cards
        if(messageJson.listAdded == "/api/add_atendimentos")
        {
          this.requestOrca(0); 
        }
        else if(messageJson.listAdded == "/api/add_agPecas")
        {
          this.requestOrca(1); 
        }
        else if(messageJson.listAdded == "/api/add_rtVisita")
        {
          this.requestOrca(2);   
        }
        else if(messageJson.listAdded == "/api/add_pagamento")
        {
          this.requestOrca(3);    
        }
        else if(messageJson.listAdded == "/api/add_finalizados")
        {
          this.requestOrca(4);    
        }
        else
        {
          this.requestAllOrcas();
        }

        //Cleaning the list that lose cards
        var listToReload = 0;

        if(messageJson.listRemoved == "/api/remove_atendimentos")
        {
          listToReload = 0;
          for (var i = 0; i <= this.lists[listToReload].cards.length - 1; i++) {
            this.deleteCard(listToReload, Number(this.lists[listToReload].cards[i]));
          }
          this.requestOrca(listToReload);
        }
        else if(messageJson.listRemoved == "/api/remove_agPecas")
        {
          listToReload = 1;
          for (var i = 0; i <= this.lists[listToReload].cards.length - 1; i++) {
            this.deleteCard(listToReload, Number(this.lists[listToReload].cards[i]));
          }
          this.requestOrca(listToReload);
        }
        else if(messageJson.listRemoved == "/api/remove_rtVisita")
        {
          listToReload = 2;   
          for (var i = 0; i <= this.lists[listToReload].cards.length - 1; i++) {
            this.deleteCard(listToReload, Number(this.lists[listToReload].cards[i]));
          }
          this.requestOrca(listToReload);
        }
        else if(messageJson.listRemoved == "/api/remove_pagamento")
        {
          listToReload = 3;    
          for (var i = 0; i <= this.lists[listToReload].cards.length - 1; i++) {
            this.deleteCard(listToReload, Number(this.lists[listToReload].cards[i]));
          }
          this.requestOrca(listToReload);
        }
        else if(messageJson.listRemoved == "/api/remove_finalizados")
        {
          listToReload = 4;   
          for (var i = 0; i <= this.lists[listToReload].cards.length - 1; i++) {
            this.deleteCard(listToReload, Number(this.lists[listToReload].cards[i]));
          }
          this.requestOrca(listToReload); 
        }

        
      });
  	
    //Initializing orca list
  	const listsAux: ListSchema[] = [
      {
        name: 'Em Análise',
        cards: [],
        id : "l0"
      },
      {
        name: 'Aguardando Peças',
        cards: [],
        id : "l1"
      },
      {
        name: 'Em conserto',
        cards: [],
        id : "l2"
      },
      {
        name: 'Pagamento',
        cards: [],
        id : "l3"
      },
      {
        name: 'Clientes finalizados',
        cards: [],
        id : "l4"
      }
    ];

    this.lists = listsAux;
    this.cardStore = new CardStore();

    if(window.location.href.match(/www/) != null)
    {
      console.log("das me: " + window.location.href);
        this.url = "http://www.myas.com.br";
    }
    else
    {
        if(window.location.href.match(/local/) != null){
          this.url = "http://localhost";
        }
        else{
          this.url = "http://myas.com.br";
        }
         
    }
    this.requestAllOrcas();
  } 



  //Method to request orcas from db
  requestOrca(i : number)
  {
    this.http.get("/api/get_" + this.listsNames[i]).subscribe(data => 
    {

      this.dataHolder = data;
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
           const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito,
            data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
            data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, data[j].realizado, 
            data[j].pecas, data[j].servico, data[j].maoObra, data[j].valorFinal, data[j].metPag, 
            data[j].observacoes, data[j]._id);
          

          this.lists[i].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: " + err.error.message);
    });   
  }

  requestAllOrcas()
  {
    this.requestOrca(0); 
    this.requestOrca(1); 
    this.requestOrca(2); 
    this.requestOrca(3); 
    this.requestOrca(4); 
  }

  requestGet(msg: string)
  {
    this.socketService.sendChanges(msg);
  }

  getOrcasList(): Observable<ListSchema[]>
  {
  	return of(this.lists);
  }

  getCardStore(): Observable<CardStore>
  {
    return of(this.cardStore);
  }

  /*Apply some command in one list
    @Params:
    commandAdd: Url of the command to add the card on new list(send to back end)
    commandRemove: Url of the command to remove the card on new list(send to back end)
    card: The that will be changed
  */
  addAndRemove(commandAdd: string, commandRemove: string, card: any)
  {
    //Updating variable on service, to refresh all clients list
    this.cardStore.updateCard(card.id, card);
    //Obtaining the list id
    var listAux = this.whichList(card.id);

    //Updating lists to frontEnd
    this.deleteCard(listAux.listID, card.id);

    //Updating db and other clients
    this.requestGet('{\n"listRemoved": "'+ commandRemove +'",\n"listAdded": "'+ commandAdd +
                '",\n"cardId": "'+ card.id+'"\n}');
    if(this.addCardDB(commandAdd,card) && this.removeCardDB(commandRemove, card))
    {
      if(commandAdd == "/api/add_atendimentos")
      {
        this.requestOrca(0); 
      }
      else if(commandAdd == "/api/add_agPecas")
      {
        this.requestOrca(1); 
      }
      else if(commandAdd == "/api/add_rtVisita")
      {
        this.requestOrca(2);   
      }
      else if(commandAdd == "/api/add_pagamento")
      {
        this.requestOrca(3);    
      }
      else if(commandAdd == "/api/add_finalizados")
      {
        this.requestOrca(4);    
      }
      else
      {
        this.requestAllOrcas();
      }      
    }
  }

  addCardDB(commandAdd: string, card: any): boolean
  {
    //Adding card to another part of db
    this.http.post(this.url + commandAdd, card ).subscribe(
      res => {         
            return true;
      },err => {
        console.log("Error occured: " + err.error.message);
        return false;
      }
    );
    return true;
  }
  
  removeCardDB(commandRemove: string, card: any): boolean
  {
    this.http.post(this.url + commandRemove, card ).subscribe(
          res => { 
            return true;
          },err => {
            console.log("Error occured: " + err.error.message);
            return false;
          });
    return true;
  }

  whichList(cardID: any): any
  {
    var ret = {listID: -1, listName: "error"};
    for (var i = 0 ; i < this.lists.length; i++) 
    {
      if(this.lists[i].cards.includes(cardID.toString()))
      {
        ret =  {listID: i, listName: this.lists[i].name};
        break;
      }
    }
    return ret;
  }

  deleteCard(listID: number, cardId: number)
  {

    // Find and remove item from an array
    var i = this.lists[listID].cards.indexOf(cardId.toString());
    if(i != -1) {
      this.lists[listID].cards.splice(i, 1);
    }
    this.cardStore.removeCard(cardId);

  }

}



//Interface for data that will be inputed on cards
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
