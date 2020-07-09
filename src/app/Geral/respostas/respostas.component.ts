import { Component, OnInit } from '@angular/core';
import { Topico } from '../topicos/topico';
import { Resposta } from './resposta';
import { RespostasService } from './respostas.service';
import { Router } from '@angular/router';
import { RespostaForm } from './respostaForm';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-respostas',
  templateUrl: './respostas.component.html',
  styleUrls: ['./respostas.component.css']
})
export class RespostasComponent implements OnInit {

  listaRespostas: Resposta[];
  topicoRef: Topico;
  form: FormGroup
  
  obj;

  constructor(private service: RespostasService, private fb: FormBuilder, private route: Router) { 

    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;

    this.topicoRef = this.obj.topico;

    this.getResposta();

    this.form = this.fb.group({
      mensagem: ['']
    })
  }

  ngOnInit(): void {
  }

  getResposta(){
    this.service.getRespostas(this.topicoRef.id)
      .subscribe(data => {
        this.listaRespostas = data.content;
      });
  }

  voltar(){
    this.route.navigateByUrl("/livros");
  }

  submitForm() { 
    this.criarResposta(this.form.value);
  }

  criarResposta(livro: RespostaForm){
    livro.idTopico = this.topicoRef.id

    this.service
    .criarResposta(livro)
    .subscribe(data => {
      console.log("Data", data);

      if(data != null){
        this.getResposta();
      }
    });
  }

}
