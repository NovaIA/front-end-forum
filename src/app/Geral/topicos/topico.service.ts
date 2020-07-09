import { Injectable } from '@angular/core';
import { Topicos } from './topicos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topico } from './topico';
import { LoginService } from '../login/service/login.service';
import { TopicoForm } from './topicoForm';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getTopicos(idLivro: number) {
    let url: string = 'http://localhost:8091/topicos?idLivro=' + idLivro

    return this.http
    .get<Topicos>(url);
  }

  criarTopico(topico: TopicoForm){

    let token: string = "Bearer " + this.loginService.retornoToken.token;
    const head= new HttpHeaders().append('content-type', 'application/json').append('Authorization', token);

    return this.http
    .post<Topico>('http://localhost:8091/livros', {
      titulo: topico.titulo,
      mensagem: topico.mensagem,
      idLivro: topico.idLivro,
      idAutor: this.loginService.idAutor,
    }, 
    {headers:head})
  }
}
