import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Livros } from './livros';
import { LivroForm } from './livroForm';
import { Livro } from './livro';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getLivros() {
    let url: string = 'http://localhost:8091/livros';

    return this.http
    .get<Livros>(url)
  }

  criarLivro(livro: LivroForm){

    let token: string = "Bearer " + this.loginService.retornoToken.token;
    const head= new HttpHeaders().append('content-type', 'application/json').append('Authorization', token);

    return this.http
    .post<Livro>('http://localhost:8091/livros', {
      categoria: livro.categoria,
      idAutor: this.loginService.idAutor,
      nome: livro.nome
    }, 
    {headers:head})
  }
}
