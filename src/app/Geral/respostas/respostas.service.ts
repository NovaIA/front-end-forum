import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Respostas } from './respostas';
import { RespostaForm } from './respostaForm';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RespostasService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getRespostas(idTopico: number) {
    let url: string = 'http://localhost:8091/respostas?idTopico=' + idTopico

    return this.http
    .get<Respostas>(url);
  }

  criarResposta(resposta: RespostaForm){

    let token: string = "Bearer " + this.loginService.retornoToken.token;
    const head= new HttpHeaders().append('content-type', 'application/json').append('Authorization', token);

    return this.http
    .post<Respostas>('http://localhost:8091/livros', {
      mensagem: resposta.mensagem,
      idAutor: this.loginService.idAutor,
      idTopico: resposta.idTopico
    }, 
    {headers:head})
  }
}
