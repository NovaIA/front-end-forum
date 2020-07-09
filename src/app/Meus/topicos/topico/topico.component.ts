import { Component, OnInit } from '@angular/core';
import { Topico } from '../service/topico';
import { TopicoService } from '../service/topico.service';
import { Router } from '@angular/router';
import { Livro } from 'src/app/Meus/livros/service/livro';

@Component({
  selector: 'app-topico',
  templateUrl: './topico.component.html',
  styleUrls: ['./topico.component.css']
})
export class TopicoComponent implements OnInit {

  listaTopico: Topico[];
  livroRef: Livro;

  idAutor: number;
  obj;

  constructor(private service: TopicoService, private route: Router) { 

    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;

    this.idAutor = this.obj.idAutor;

    this.service.getTopicos(1)
      .subscribe(data => {
        this.listaTopico = data.content;
      });
  }

  ngOnInit(): void {
  }

  editar(item: Topico){
    this.route.navigateByUrl("/meus-topico-editar", {
      state: {
              topico: item,
              idLivro: item.id,
              idAutor: this.idAutor
            },
    })
  }

  respostas(item: Topico){
    this.route.navigateByUrl("/meus-respostas", {
      state: {
              topico: item,
              idAutor: this.idAutor,
              idTopico: item.id
            },
    })
  }

}
