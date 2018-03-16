import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardSchema } from '../common_components/schemas/cardSchema';
import { CardStore } from '../common_components/schemas/cardStore';
import { ListSchema } from '../common_components/schemas/listSchema';

@Injectable()
export class OrcaDataService {
	lists: ListSchema[];
	cardStore: CardStore;
	dataHolder: any;
	url = "http://myas.com.br";


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
    } 
    requestOrcas();
  }

  //Method to request orcas from db
  requestOrcas()
  {  	
  	//Requesting all orca data
  	//Getting the first colunm data and saving on the list
		this.http.get<ItemsResponse>("/api/get_orcas").subscribe(data => {
      this.dataHolder = data;
      for (var i = 0; i < this.dataHolder.length; i++) {
          const cardId = this.cardStore.newCard("Orçamento",  data[i].cpf, data[i]._id, data[i].defeito, 
          	data[i].nome, data[i].telPrimario, new Date(data[i].data) , data[i].periodo, data[i].endereco, 
          	data[i].marca, data[i].modelo, data[i].telSecundario, data[i].email, null, null, null, null, 
          	null, null, data[i].observacoes);
          this.lists[0].cards.push(cardId)
      }
    });

		//Getting the second data colunm and saving on the list
		this.http.get<ItemsResponse>("/api/get_atendimentos").subscribe(data => {
      this.dataHolder = data;
      for (var i = 0; i < this.dataHolder.length; i++) {
          const cardId = this.cardStore.newCard("Orçamento",  data[i].cpf, data[i]._id, data[i].defeito, 
          	data[i].nome, data[i].telPrimario, new Date(data[i].data) , data[i].periodo, data[i].endereco,
          	 data[i].marca, data[i].modelo, data[i].telSecundario, data[i].email, null, null, null, null, 
          	 null, null, data[i].observacoes);
          this.lists[1].cards.push(cardId)
      }
    });

		//Getting the thrird data colunm and saving on the list
    this.http.get(this.url + '/api/get_agPecas').subscribe(data => {
      this.dataHolder = data;
      for (var i = 0; i < this.dataHolder.length; i++) {
          const cardId = this.cardStore.newCard("Orçamento",  data[i].cpf, data[i]._id, data[i].defeito,
           data[i].nome, data[i].telPrimario, new Date(data[i].data) , data[i].periodo, data[i].endereco,
            data[i].marca, data[i].modelo, data[i].telSecundario, data[i].email, data[i].realizado, 
            data[i].pecas, data[i].servico, data[i].maoObra, data[i].valorFinal, data[i].metPag, 
            data[i].observacoes);
          this.lists[2].cards.push(cardId)
      }
    });

    //Getting the 4th data colunm and saving on the list
    this.http.get(this.url + '/api/get_rtVisita').subscribe(data => {
      this.dataHolder = data;
      for (var i = 0; i < this.dataHolder.length; i++) {
          const cardId = this.cardStore.newCard("Orçamento",  data[i].cpf, data[i]._id, data[i].defeito,
           data[i].nome, data[i].telPrimario, new Date(data[i].data) , data[i].periodo, data[i].endereco,
            data[i].marca, data[i].modelo, data[i].telSecundario, data[i].email, data[i].realizado,
             data[i].pecas, data[i].servico, data[i].maoObra, data[i].valorFinal, data[i].metPag,
             data[i].observacoes);
          this.lists[3].cards.push(cardId)
      }
    });

		//Getting the 5th data colunm and saving on the list
    this.http.get(this.url + '/api/get_pagamento').subscribe(data => {
      this.dataHolder = data;
      console.log(this.auxData);
      for (var i = 0; i < this.dataHolder.length; i++) {
          const cardId = this.cardStore.newCard("Orçamento",  data[i].cpf, data[i]._id, data[i].defeito,
           data[i].nome, data[i].telPrimario, new Date(data[i].data) , data[i].periodo, data[i].endereco,
            data[i].marca, data[i].modelo, data[i].telSecundario, data[i].email, data[i].realizado,
             data[i].pecas, data[i].servico, data[i].maoObra, data[i].valorFinal, data[i].metPag,
             data[i].observacoes);
          this.lists[4].cards.push(cardId)
      }

    });
  }


  getOrcasList()
  {
  	return this.lists;
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
