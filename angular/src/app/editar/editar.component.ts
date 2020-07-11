import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment} from '../../environments/environment'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd} from '@angular/router';
const updateuser = environment.API_URL+ '/modificar1/';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
user:any;
userForm: FormGroup;
constructor(private formBuilder: FormBuilder,private http: HttpClient,private router: Router) {
  if (sessionStorage.getItem("user")) {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }
 }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email:["",Validators.required],
      nombre:["",Validators.required],
      apellido:["",Validators.required],
      edad:["",Validators.required],
  }); 
  }
  update(user){
    let nombre =this.userForm.get('nombre').value;
    let apellido =this.userForm.get('apellido').value;
    let edad =this.userForm.get('edad').value;
    let email =this.userForm.get('email').value;
    if(this.userForm.invalid){
     alert('Datos requeridos')
    }else{
      let loginData = {
        data:{
          nombre,
          apellido,
          edad,
          email
        }
      };
      this.http.put(updateuser+`${user._id}`,loginData).subscribe(data=>{
      console.log(Object.values(data).length)
      if(Object.values(data).length===3){
        this.router.navigate(['/menu']);
        }else{
          alert('no ediatdo')
        } 
      });
    }
  }
}
