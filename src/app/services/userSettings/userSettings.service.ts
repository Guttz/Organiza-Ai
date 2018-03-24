import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../common_components/schemas/card';
import { ListSchema } from '../../common_components/schemas/listSchema';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { SocketComunicator } from '../socketComunicator/socketComunicator.service';


@Injectable()
export class UserSettingsService 
{
  //Observable that will be used to print all data on screen
	lists: ListSchema[];
	dataHolder: any;
	url = "http://myas.com.br";
  ioConnection: any;
  textOS = "";
  imgLink = "";


  constructor(private http: HttpClient, private socketService: SocketComunicator) 
  { 
   this.initialize();
   this.getDataDB();
  } 

  public initialize()
  {
    const listsAux: ListSchema[] = 
    [
      {
        name: '',
        cards: [],
        id : 0
      },
      {
        name: '',
        cards: [],
        id : 1
      },
      {
        name: '',
        cards: [],
        id : 2
      },
      {
        name: '',
        cards: [],
        id : 3
      },
      {
        name: '',
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
  }

  public requestGet(msg: string)
  {
    this.socketService.sendChanges(msg);
  }

  public getOrcasList(): Observable<ListSchema[]>
  {
  	return of(this.lists);
  }

  public getDataDB()
  {
    this.http.get(this.url + "/api/get_list_headers").subscribe(data => 
    {

      for(var i = 0; i < this.lists.length; i++){
        this.lists[i].name = data[i];
      }
      this.textOS = data[this.lists.length];
      this.imgLink = data[this.lists.length+1];

      console.log(data);
    }, err =>{
      console.log("Erro ao carregar título das listas: + " + err);
    });
  }

  private setDataDB(headerJson: any)
  {

    this.http.post(this.url + "/api/set_list_headers", headerJson).subscribe(data => 
    {
      console.log(data);
    }, err =>{
      console.log("Erro na mudança de cabeçalho: " + err);
    });
  }

}