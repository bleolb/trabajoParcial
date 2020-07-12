import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { EdituserComponent } from './edituser/edituser.component'
import { MenuComponent } from './menu/menu.component'
import { CongresosComponent} from './congresos/congresos.component'
const routes: Routes = [
    {path:'',redirectTo: '/login', pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path:'edit',component: EdituserComponent},
    {path:'home',component: MenuComponent},
    {path: 'congresos',component: CongresosComponent},
    {
        path: 'menu',loadChildren:()=>
        import('./menu-usarios/menu.module')
        .then((m)=>m.MenuModule)},
    {
        path: 'usuarios-nuevo',loadChildren:()=>
        import('./usuarios-nuevo/usuarios-nuevo.module')
        .then((m)=>m.UsuariosNuevoModule)},
];  {
        
}

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class appRoutingModule{}