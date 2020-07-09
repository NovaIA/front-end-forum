import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthForm } from './authForm';
import { Jwt } from './jwt';
import { CriarUsuarioForm } from './criarUsuarioForm';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  retornoToken: Jwt;
  retornoUsuario: Usuario;
  idAutor: number;

  constructor(private http: HttpClient) { }

  auth(login: AuthForm) : Jwt{
    
    const head= new HttpHeaders().append('content-type', 'application/json');
    
    this.http
    .post<Jwt>('http://localhost:8091/auth', {
      email: login.email,
      senha: login.senha
    },
    {headers:head})
    .subscribe(data => {
      console.log("Data", data);
      this.retornoToken.tipo = data.tipo;
      this.retornoToken.token = data.token;
    });

    console.log("Retorno token", this.retornoToken)
    return this.retornoToken;
  }

  criarUsuario(usuario: CriarUsuarioForm) : Usuario{

    const head= new HttpHeaders().append('content-type', 'application/json');

    this.http
    .post<Usuario>("http://localhost:8091/usuarios", {
      email: usuario.email,
      nome: usuario.nome,
      senha: usuario.senha
    },
    {headers:head})
    .subscribe(data => {
      console.log("Data", data);
      this.retornoUsuario.id = data.id;
      this.retornoUsuario.nome = data.nome;
    });

    return this.retornoUsuario;
  }
}
