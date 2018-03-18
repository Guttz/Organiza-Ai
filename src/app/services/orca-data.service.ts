import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardSchema } from '../common_components/schemas/cardSchema';
import { CardStore } from '../common_components/schemas/cardStore';
import { ListSchema } from '../common_components/schemas/listSchema';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class OrcaDataService {
	lists: ListSchema[];
	cardStore: CardStore;
	dataHolder: any;
	url = "http://myas.com.br";
  //List names for the backend requests be directly to the right collection
  listsNames = ["orcas", "atendimentos", "agPecas", "rtVisita", "pagamento", "finalizados"];

  constructor(private http: HttpClient) 
  { 
  	//Initializing orca list
  	const listsAux: ListSchema[] = [
      {
        name: 'Visita Orçamento',
        cards: [],
        id : "l0"
      },
      {
        name: 'Visita técnico',
        cards: [],
        id : "l1"
      },
      {
        name: 'Aguardando Peças',
        cards: [],
        id : "l2"
      },
      {
        name: 'Retorno Visita',
        cards: [],
        id : "l3"
      },
      {
        name: 'Pagamento',
        cards: [],
        id : "l4"
      },
      {
        name: 'Clientes finalizados',
        cards: [],
        id : "l5"
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
    this.requestOrcas(); 

    //Getting the new cards X miliseconds
    Observable.interval( 10000).subscribe(x => {
      this.requestOrcas();
    });
  } 



  //Method to request orcas from db
  requestOrcas()
  {
    this.http.get("/api/get_" + this.listsNames[0]).subscribe(data => 
    {
      console.log("-----------" + 0 + "----------")
      console.log( this.listsNames[0]);

      this.dataHolder = data;
      console.log(this.lists[0].cards);
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
          const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito, 
          data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
           data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, 
           null, null, data[j].observacoes);
          this.lists[0].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: c" + err.error.message);
    });
    this.http.get("/api/get_" + this.listsNames[1]).subscribe(data => 
    {
      console.log("-----------" + 1 + "----------")
      console.log( this.listsNames[1]);

      this.dataHolder = data;
      console.log(this.lists[1].cards);
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
          const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito, 
          data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
           data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, 
           null, null, data[j].observacoes);
          this.lists[1].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: c" + err.error.message);
    });
 
    this.http.get("/api/get_" + this.listsNames[2]).subscribe(data => 
    {
      console.log("-----------" + 2 + "----------")
      console.log( this.listsNames[2]);

      this.dataHolder = data;
      console.log(this.lists[2].cards);
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
          const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito, 
          data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
           data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, 
           null, null, data[j].observacoes);
          this.lists[2].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: c" + err.error.message);
    });
    
    this.http.get("/api/get_" + this.listsNames[3]).subscribe(data => 
    {
      console.log("-----------" + 3 + "----------")
      console.log( this.listsNames[3]);

      this.dataHolder = data;
      console.log(this.lists[3].cards);
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
          const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito, 
          data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
           data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, 
           null, null, data[j].observacoes);
          this.lists[3].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: c" + err.error.message);
    });
    
    this.http.get("/api/get_" + this.listsNames[4]).subscribe(data => 
    {
      console.log("-----------" + 4 + "----------")
      console.log( this.listsNames[4]);

      this.dataHolder = data;
      console.log(this.lists[4].cards);
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
          const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito, 
          data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
           data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, 
           null, null, data[j].observacoes);
          this.lists[4].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: c" + err.error.message);
    });
    
    this.http.get("/api/get_" + this.listsNames[5]).subscribe(data => 
    {
      console.log("-----------" + 5 + "----------")
      console.log( this.listsNames[5]);

      this.dataHolder = data;
      console.log(this.lists[5].cards);
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        var result = this.cardStore.findCard(data[j]._id);
        if(!result.exists)
        {
          //Adding to the right list
          const cardId = this.cardStore.newCard("Orçamento",  data[j].cpf, data[j]._id, data[j].defeito, 
          data[j].nome, data[j].telPrimario, new Date(data[j].data) , data[j].periodo, data[j].endereco, 
           data[j].marca, data[j].modelo, data[j].telSecundario, data[j].email, null, null, null, null, 
           null, null, data[j].observacoes);
          this.lists[5].cards.push(cardId);
        }        
      }
    },err =>{
      console.log("Error occured: c" + err.error.message);
    });
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
    //Removing the card from lists

    console.log("Removendo o card: " + card.id + " da lista " + listAux.listID);

    // Find and remove item from an array
    var i = this.lists[listAux.listID].cards.indexOf(card.id);
    if(i != -1) {
      this.lists[listAux.listID].cards.splice(i, 1);
    }

    this.cardStore.removeCard(card.id);
    //Updating db cards
    this.http.post(this.url + commandAdd, card ).subscribe(
      res => { 
        this.http.post(this.url + commandRemove, card ).subscribe(
          res => { 

            console.log("Card movido com sucesso.");

            return true;
          },err => {
            console.log("Error occured:aaa " + err.error.message);
            return false;
          });
      },err => {
        console.log("Error occured: bbb" + err.error.message);
        return false;
      }
    );
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
