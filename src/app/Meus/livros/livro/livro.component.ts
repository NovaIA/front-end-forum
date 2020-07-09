import { Component, OnInit } from '@angular/core';
import { LivroService } from '../service/livro.service';
import { Livro } from '../service/livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  listaLivro: Livro[];

  idAutor: number;
  obj;

  constructor(private service: LivroService, private route: Router) {
    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;

    this.idAutor = this.obj.idAutor;
    
    this.service.getLivros(1)
      .subscribe(data => {
        this.listaLivro = data.content;
      });
  }

  ngOnInit(): void {
  }

  editar(item: Livro){
    this.route.navigateByUrl("/meus-livro-editar", {
      state: {
              livro: item,
              idAutor: this.idAutor,
              idLivro: item.id
            },
    })
  }

  topicos(item: Livro){
    this.route.navigateByUrl("/meus-topicos", {
      state: {
              livro: item,
              idAutor: this.idAutor,
              idLivro: item.id
            },
    })
  }

}
