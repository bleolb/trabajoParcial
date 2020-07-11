import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
//import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketJwtService extends Socket {

  constructor() { 
   const token = JSON.parse(sessionStorage.getItem("token1"));
    console.log(Object.values(token))
    super({url:'http://localhost:27017',options:{
      query : `token = ${token}`,
    }});
  }
}
