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
  config: any = { linkLogo : "", termosOS: "", termoOSFinalizada: ""};
  url = "https://myas.com.br";
  ioConnection: any;

  constructor(private http: HttpClient, private socketService: SocketComunicator) 
  { 
    this.initialize();
    this.getConfigsDB();
  } 

  public initialize()
  {
    if(window.location.href.match(/www/) != null)
    {
      this.url = "https://www.myas.com.br";
    }
    else
    {
      if(window.location.href.match(/local/) != null)
      {
        this.url = "https://localhost";
      }
      else
      {
        this.url = "https://myas.com.br";
      }   
    }
  }

  public requestGet(msg: string)
  {
    this.socketService.sendChanges(msg);
  }

  setConfigsDB(newConfigs: any)
  {
      this.config = newConfigs;
      this.http.post(this.url + "/api/set_configs", newConfigs).subscribe(data => 
      {
        console.log(data);
      }, err =>{
        console.log("Erro na mudança de cabeçalho: " + err);
      });
  }

  getConfigsDB()
  {
      this.http.get(this.url + "/api/get_configs").subscribe(data => 
      {
        var aux = Object();
        aux = data;

        if(data == null){
          this.config = { linkLogo : "", termosOS: "", termosFinalizado: ""};
        }
        else{
          this.config.linkLogo = aux.linkLogo;
          this.config.termosOS = aux.termosOS;
          this.config.termoOSFinalizada = aux.termoOSFinalizada;
        }
      }, err =>{
        console.log("Erro na mudança de cabeçalho: " + err);
      });
  }

  public getConfigs(): Observable<any>
  {
    return of(this.config);
  }

}