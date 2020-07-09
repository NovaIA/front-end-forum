import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livros } from './livros';
import { Livro } from './livro';
import { LivroForm } from './LivroForm';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }

  getLivros(idAutor: number) {
    let url: string = 'http://localhost:8091/livros/' + idAutor;

    return this.http
    .get<Livros>(url)
  }

  editarLivro(livro: LivroForm){
    let url: string = 'http://localhost:8091/livros/' + livro.idAutor;

    return this.http
    .put<Livro>(url, {
      categoria: livro.categoria,
      idAutor: livro.idAutor,
      nome: livro.nome
    })
  }
}
