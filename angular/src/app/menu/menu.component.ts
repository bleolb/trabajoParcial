import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router';
import { environment} from '../../environments/environment'

const getusuarios= environment.API_URL+ '/get_usuarios';
const deleteusuarios = environment.API_URL+ '/borrar1/';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  user:any
  constructor(private http: HttpClient,private router: Router){ } 

  ngOnInit() {
    this.getUsuario()
  }
  getUsuario(){  
  this.http.get(getusuarios).subscribe(data=>{
    let datos=Object.values(data)
    console.log(datos)
    datos.forEach(element => {
      this.user=element
      console.log(element)
    });
  })
  }
  deleteuser(user){
    this.http.delete(deleteusuarios+`${user}`).subscribe(data=>{
      console.log(Object.values(data).length)
      if(Object.values(data).length===3){
        alert('borrado exitoso')
      }else{
        alert('revisa el codigo zonzo')
      }
    })
  }
  public editar(user): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/editar']);
  }
}
