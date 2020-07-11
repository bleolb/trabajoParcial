import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'},
  {path : 'login', component:LoginComponent },
  {path : 'menu', loadChildren: () => import('./menu/menu.module').then(m =>m.MenuModule)},
  {path : 'usuario-nuevo', loadChildren: () => import('./usuario-nuevo/usuario-nuevo.module').then(m =>m.UsuarioNuevoModule)},
  {path : 'crear-doc', loadChildren: () => import('./crear-doc/crear-doc.module').then(m =>m.CrearDocModule)},
  {path : 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
