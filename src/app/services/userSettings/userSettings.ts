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
	dataHolder: any;
	url = "http://myas.com.br";
  ioConnection: any;


  constructor(private http: HttpClient, private socketService: SocketComunicator) 
  { 
    this.initialize();
  } 

  public initialize()
  {
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


  changeSettingsDB()
  {

  }
}