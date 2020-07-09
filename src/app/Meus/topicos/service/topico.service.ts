import { Injectable } from '@angular/core';
import { Topico } from './topico';
import { HttpClient } from '@angular/common/http';
import { Topicos } from './topicos';
import { TopicoForm } from './topicoForm';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  listaLivro: Topico[] = [];

  constructor(private http: HttpClient) { }

  getTopicos(idAutor: number) {
    let url: string = 'http://localhost:8091/topicos/' + idAutor
    // let url: string = 'http://localhost:8091/topicos?idLivro=' + idLivro

    return this.http
    .get<Topicos>(url);
  }

  editarLivro(livro: TopicoForm){
    //let url: string = 'http://localhost:8091/livros/' + livro.idAutor;

    // return this.http
    // .put<Topico>(url, {
    //   categoria: livro.categoria,
    //   idAutor: livro.idAutor,
    //   nome: livro.nome
    // })
  }

  criarLivro(livro: TopicoForm){
    // return this.http
    // .post<Livro>('http://localhost:8091/livros', {
    //   categoria: livro.categoria,
    //   idAutor: livro.idAutor,
    //   nome: livro.nome
    // })
  }
}
