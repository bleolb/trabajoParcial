import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SocketIoModule } from 'ngx-socket-io';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component'
import { HttpClientModule } from '@angular/common/http';
import {appRoutingModule} from './app-routing.module';
import { RouterModule } from '@angular/router';
import { EdituserComponent } from './edituser/edituser.component';
import { MenuComponent } from './menu/menu.component';
import { CongresosComponent } from './congresos/congresos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EdituserComponent,
    MenuComponent,
    CongresosComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocketIoModule,
    appRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
