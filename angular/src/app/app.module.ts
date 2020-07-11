import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule } from 'ngx-socket-io';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { Editar1Component} from './editar1/editar1.component';



//const config:SocketIoConfig={url:'http://localhost:27017',options:{}}
@NgModule({
  declarations: [
    AppComponent,
    //DocumentosComponent,
    //ListaDocumentosComponent,
    LoginComponent,
    EditarComponent,
    Editar1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //SocketIoModule.forRoot(config)
    SocketIoModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
