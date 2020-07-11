import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable,Subscription } from 'rxjs'
import { DocumentosServiciosService } from '../../servicio/documentos.servicios.service'

@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.scss']
})
export class ListaDocumentosComponent implements OnInit ,OnDestroy {
  documentos:Observable<string[]>;
  actualDoc:string;
  private docSub:Subscription;
  
    constructor(private docService:DocumentosServiciosService) { }
  
    ngOnInit(): void {
      this.documentos=this.docService.docs;
      this.docSub=this.docService.documentoActual.subscribe(doc=>{
       this.actualDoc=doc.id
      //  if(!this.documentos || !this.docSub){
      //    console.log('no hay socket')
      //  }
      });
    }
  
    ngOnDestroy():void{
      this.docSub.unsubscribe();
    }
  
    leerDocumento(id:string){
      this.docService.getDocumento(id);
    }
  
    nuevoDocumento(){
      this.docService.postDocumento();
   }
    
}
