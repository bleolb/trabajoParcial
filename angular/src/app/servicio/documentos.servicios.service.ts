import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {Documentos} from '../modelos/documentos';
import { SocketJwtService } from './socket-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentosServiciosService {
  contador =0;
  constructor(private socket:SocketJwtService) {
  
   }
  
    documentoActual=this.socket.fromEvent<Documentos>('gestionDato');
  
    docs=this.socket.fromEvent<string[]>('gestionDatos')
  
  
    getDocumento(id:string){
      this.socket.emit('getDoc',id);
    }
  
    postDocumento(){
      console.log(this.socket)
      if (this.socket.ioSocket.connected){ 
      //this.socket.emit('addDoc',{id: this.docId(), doc:''});
      this.socket.emit('addDoc',{id: this.docId(), doc:''});
      }else{
        alert('sin conexion')
      }
    }
  
    editDocumento(doc:Documentos){
      this.socket.emit('editDoc',doc)
    }
   
    private docId(){
      this.contador ++;
      const text =`documento  ${this.contador}`
      return text;
    }
  }