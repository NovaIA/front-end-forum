import { Injectable } from '@angular/core';
import { Respostas } from './respostas';
import { HttpClient } from '@angular/common/http';
import { RespostaForm } from './respostaForm';
import { Resposta } from './resposta';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {

  constructor(private http: HttpClient) { }

  getRespostas(idAutor: number) {
    let url: string = 'http://localhost:8091/topicos/' + idAutor
    //let url: string = 'http://localhost:8091/respostas?idTopico=' + idTopico

    return this.http
    .get<Respostas>(url);
  }

  editarRespostas(resposta: RespostaForm){
    let url: string = 'http://localhost:8091/respostas/' + resposta.idAutor;

    // return this.http
    // .put<Resposta>(url, {
    //   categoria: livro.categoria,
    //   idAutor: livro.idAutor,
    //   nome: livro.nome
    // })
  }

  criarLivro(resposta: RespostaForm){
    // return this.http
    // .post<Livro>('http://localhost:8091/livros', {
    //   categoria: livro.categoria,
    //   idAutor: livro.idAutor,
    //   nome: livro.nome
    // })
  }
} 
