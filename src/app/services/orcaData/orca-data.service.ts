import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../common_components/schemas/card';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { SocketComunicator } from '../socketComunicator/socketComunicator.service';


@Injectable()
export class OrcaDataService 
{
  //Observable that will be used to print all data on screen
	lists: ListSchema[];
	dataHolder: any;
	url = "http://myas.com.br";
  ioConnection: any;
  //List names for the backend requests be directly to the right collection
  listsNames = ["atendimento", "agPecas", "rtVisita", "pagamento", "finalizado"];
  iMadeTheChange = false;
  constructor(private http: HttpClient, private socketService: SocketComunicator) 
  { 
    this.initialize();
    socketService.initSocket();
    //Setting what the service will do when recive and change signal from the socket
    this.ioConnection = this.socketService.getChanges().subscribe(
      (message: any) => {
        if(!this.iMadeTheChange)
        {
          console.log("Mensagem recebida");
          console.log(message);
          var msgJson = message;
          var cardAux = new Card();

          var fromList = msgJson.fromList;
          var toList = msgJson.toList;
          delete msgJson.fromList;
          delete msgJson.toList;

          cardAux.init(msgJson);
          console.log(cardAux);
          this.moveCardFront(cardAux, fromList, toList);
        }
        else
        {
          this.iMadeTheChange = false;
        }

      });
   
  } 

  public initialize()
  {
    const listsAux: ListSchema[] = [
      {
        name: 'Em Análise',
        cards: [],
        id : 0
      },
      {
        name: 'Aguardando Peças',
        cards: [],
        id : 1
      },
      {
        name: 'Em conserto',
        cards: [],
        id : 2
      },
      {
        name: 'Pagamento',
        cards: [],
        id : 3
      },
      {
        name: 'Clientes finalizados',
        cards: [],
        id : 4
      }
    ];

    this.lists = listsAux;
    if(window.location.href.match(/www/) != null)
    {
      this.url = "http://www.myas.com.br";
    }
    else
    {
      if(window.location.href.match(/local/) != null)
      {
        this.url = "http://localhost";
      }
      else
      {
        this.url = "http://myas.com.br";
      }   
    }
    this.requestAllOrcas();
  }

  //Method to request data from db
  private requestOrca(i : number)
  {
    console.log(this.url + "/api/get_" + this.listsNames[i])
    this.http.get(this.url + "/api/get_" + this.listsNames[i]).subscribe(data => 
    {
      this.dataHolder = data;
      for (var j = 0; j < this.dataHolder.length; j++) 
      {
        //Checking if this card is alerady on this list
        var isAleredy = false;
        for (var k = 0; k < this.lists[i].cards.length; k++) {
          if(this.lists[i].cards[k].getOrdServ() == this.dataHolder[j])
          {
            isAleredy = true;
            break;
          }
        }
        if(isAleredy)
          continue;


        //Adding the new card

        var card = new Card();

        //this.dataHolder[j].ordServ = this.dataHolder[j]._id;
        console.log(this.dataHolder[j]);
        card.init(this.dataHolder[j]);

        this.lists[i].cards.push(card);
      }        
    },err =>{
      console.log("Error occured: " + err.error.message);
    });   
  }


  public moveCardFront(card: Card, fromList: number, toList: number):boolean
  {

    //Checking if is needed to remove some card
    if(fromList == -1)
    {
      //Inserting the card on the new list
      this.lists[toList].cards.push(card);
      return true;
    }
    else
    {
      //Delete the card from list
      var listSize = this.lists[fromList].cards.length;
      var found = false;
      for (var i = 0; i < listSize; i++) 
      {
        if(this.lists[fromList].cards[i].getOrdServ() == card.getOrdServ())
        {
          this.lists[fromList].cards.splice(i,1);
          found = true;
          break;
        }
        if(found)
          break;
      }
      //Inserting the card on the new list
      this.lists[toList].cards.push(card);
      return true;
    }


    
  }

  public requestAllOrcas()
  {
    this.requestOrca(0); 
    this.requestOrca(1); 
    this.requestOrca(2); 
    this.requestOrca(3); 
    this.requestOrca(4); 
  }

  public requestGet(msg: string)
  {
    this.socketService.sendChanges(msg);
  }

  public getOrcasList(): Observable<ListSchema[]>
  {
  	return of(this.lists);
  }

  /*Apply some command in one list
    @Params:
    commandAdd: Url of the command to add the card on new list(send to back end)
    commandRemove: Url of the command to remove the card on new list(send to back end)
    card: The that will be changed
  */
  public addAndRemove(card: any, fromList: number, toList: number):boolean
  {
    if( card == undefined)
    {
      console.log("O cartão enviado para função 'addAndRemove' não é valido.");
      return false;
    }

    console.log("Movendo da lista: " + fromList + " Pra lista " + toList + " o card \n");
    console.log(card);
    this.moveCardFront(card, fromList, toList);
    this.iMadeTheChange = true;

    //Updating db and other clients
    var self = this;
    this.moveCardDB(fromList, toList, card, function(err, res){
      if(err)
      {
        console.log("Não foi possivel fazer alterações no banco de dados.");
        console.log("Erro: " + err.error.message);
        return;
      }

      var toSend = Object();
      toSend = card;
      toSend.toList = toList;
      toSend.fromList = fromList;
      self.requestGet(toSend);
    });
  }

  public addNewCard(card: any, toList: number):boolean
  {
    //Adding card to another part of db
    this.http.post(this.url + "/api/add_" + this.listsNames[toList], card ).subscribe(
      res => {    
        var aux = Object();
        aux = res;
        aux.ordServ = aux._id;
        var cardAux = new Card;
        cardAux.init(aux);


        var toSend = Object();
        toSend = cardAux.getJson();
        toSend.toList = toList;
        toSend.fromList = -1;
        this.requestOrca(0); 
        this.iMadeTheChange = true;
        this.requestGet(toSend);
          return true;
      },err => {
        console.log("Error occured: " + err.error.message);
        return false;
      });
    return true;
  }

    public removeCard(ordServ: any, fromList: number):boolean
  {
    //Adding card to another part of db
    this.http.post(this.url + "/api/remove_" + this.listsNames[fromList], ordServ ).subscribe(
      res => {
        card.fromList = fromList;
        this.iMadeTheChange = true;

        this.requestGet(card);
          return true;
      },err => {
        console.log("Error occured: " + err.error.message);
        return false;
      });
    return true;
  }

  private moveCardDB(fromList: number, toList: number, card: Card, callback = null): boolean
  {
    //Moving the card on DB
    var toSend = Object();
    toSend = card.getJson();

    toSend.toList = this.listsNames[toList];
    toSend.fromList = this.listsNames[fromList];

    this.http.post(this.url + "/api/add_and_remove", toSend).subscribe(data => 
    {

      callback(null, data);
    }, err =>{
      callback(err, null);
    });
    return true;
  }
  
}