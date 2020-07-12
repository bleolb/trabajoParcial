import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,NavigationEnd } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service'


@Component({
  selector: 'app-usuarios-nuevo',
  templateUrl: './usuarios-nuevo.component.html',
  styleUrls: ['./usuarios-nuevo.component.scss'],

})
export class UsuariosNuevoComponent implements OnInit {
  createuserForm: FormGroup;
  navigationSubcription;
  constructor(private formBuilder: FormBuilder,
  private http: HttpClient,
  private router: Router,
  private userService: UsuarioService) {}

  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      email: ['', [Validators.required]],
      passw: ['', [Validators.required]],
    });
  }
createuser(){   
  let nombre =this.createuserForm.get('nombre').value;
  let apellido =this.createuserForm.get('apellido').value;
  let edad =this.createuserForm.get('edad').value;
  let email =this.createuserForm.get('email').value;
  let passw =this.createuserForm.get('passw').value;
   if (this.createuserForm.invalid) {
      alert ('llene todos los campos')
    } else {
      let datos = {
        data: {
          nombre,
          apellido,
          edad,
          email,
          passw,
          rol: 'cliente',
        },
      };
      let user = this.userService.post('insertusuario',datos)
       if (user) {
        this.router.navigate(['/menu']);
      }
    }
  };
}