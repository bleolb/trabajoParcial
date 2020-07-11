import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearDocRoutingModule } from './crear-doc-routing.module';
import { CrearDocComponent } from './crear-doc.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { ListaDocumentosComponent } from './lista-documentos/lista-documentos.component';
import { FormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';
import { SocketJwtService } from '../servicio/socket-jwt.service';


@NgModule({
  declarations: [
    CrearDocComponent,
    DocumentosComponent,
    ListaDocumentosComponent
  ],
  imports: [
    CommonModule,
    CrearDocRoutingModule,
    FormsModule,
    SocketIoModule
  ],
  providers: [
    SocketJwtService
  ] 
})
export class CrearDocModule { }
