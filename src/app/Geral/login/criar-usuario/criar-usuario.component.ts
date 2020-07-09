import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CriarUsuarioForm } from '../service/criarUsuarioForm';
import { Usuario } from '../service/usuario';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {

  form: FormGroup;
  retornoUsuario: Usuario;

  constructor(private service: LoginService, private fb: FormBuilder, private route: Router) { 

    this.form = this.fb.group({
      nome: [''],
      email: [''],
      senha: ['']
    })
  }

  ngOnInit(): void {
  }
  submitForm() {
    this.criarAutor(this.form.value);
  }

  criarAutor(usuario: CriarUsuarioForm){
    this.retornoUsuario = this.service.criarUsuario(usuario);
  }

  voltar(){
    this.route.navigateByUrl("login");
  }
}
