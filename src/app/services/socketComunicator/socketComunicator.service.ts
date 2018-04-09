import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import * as socketIo from 'socket.io-client';

const PORT = 81

@Injectable()
export class SocketComunicator {

  url = "https://myas.com.br";

  private socket;

  public initSocket(): void {
    if(window.location.href.match(/www/) != null)
    {
      console.log("das me: " + window.location.href);
        this.url = "https://www.myas.com.br";
    }
    else
    {
        if(window.location.href.match(/local/) != null){
          this.url = "https://localhost";
        }
        else{
          this.url = "https://myas.com.br";
        }
         
    }
    this.socket = socketIo(this.url+ ":" + PORT);
  }

  public sendChanges(message: any): void {
    this.socket.emit('message', message);
  }

  public getChanges(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

}
