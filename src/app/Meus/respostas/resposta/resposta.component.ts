import { Component, OnInit } from '@angular/core';
import { RespostaService } from '../service/resposta.service';
import { Router } from '@angular/router';
import { Resposta } from '../service/resposta';
import { Topico } from 'src/app/Meus/topicos/service/topico';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {
  
  listaRespostas: Resposta[];
  topicoRef: Topico;
  
  idAutor: number;
  obj;

  constructor(private service: RespostaService, private route: Router) { 

    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;

    this.idAutor = this.obj.idAutor;

    this.service.getRespostas(1)
      .subscribe(data => {
        this.listaRespostas = data.content;
      });
  }

  ngOnInit(): void {
  }

  editar(item: Resposta){

  }

}
