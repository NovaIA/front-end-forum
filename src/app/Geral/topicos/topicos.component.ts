import { Component, OnInit } from '@angular/core';
import { TopicoService } from './topico.service';
import { Router } from '@angular/router';
import { Topico } from './topico';
import { Livro } from '../livro/livro';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TopicoForm } from './topicoForm';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.css']
})
export class TopicosComponent implements OnInit {

  listaTopico: Topico[];
  livroRef: Livro;
  form: FormGroup
  obj;

  constructor(private service: TopicoService, private fb: FormBuilder, private route: Router) {
    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;

    this.livroRef = this.obj.livro;

    this.getTopicos();

    this.form = this.fb.group({
      titulo: [''],
      mensagem: ['']
    })
   }

  ngOnInit(): void {
  }

  getTopicos(){
    this.service.getTopicos(this.livroRef.id)
      .subscribe(data => {
        this.listaTopico = data.content;
      });
  }

  respostas(item: Topico){
    console.log("Resposta", item);

    this.route.navigateByUrl("/respostas", {
      state: {
              topico: item,
              idTopico: item.id
            },
    })
  }

  voltar(){
    this.route.navigateByUrl("/livros");
  }

  submitForm() { 
    this.criarTopico(this.form.value);
  }

  criarTopico(topico: TopicoForm){
    topico.idLivro = this.livroRef.id;

    this.service
    .criarTopico(topico)
    .subscribe(data => {
      console.log("Data", data);

      if(data != null){
        this.getTopicos();
      }
    });
  }

}
