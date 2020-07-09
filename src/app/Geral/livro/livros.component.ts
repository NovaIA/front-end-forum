import { Component, OnInit } from '@angular/core';

import { LivroService } from './livro.service';
import { Livro } from './livro';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LivroForm } from './livroForm';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivrosComponent implements OnInit {

  listaLivro: Livro[];
  form: FormGroup;

  constructor(private service: LivroService, private fb: FormBuilder, private route: Router) { 
    this.getLivros();

    this.form = this.fb.group({
      nome: [''],
      categoria: ['']
    })
  }

  ngOnInit(): void {
  }

  getLivros(){
    this.service.getLivros().subscribe(data => {
      this.listaLivro = data.content;
    });

  }

  topicos(item: Livro){
    this.route.navigateByUrl("/topicos", {
      state: {
              livro: item,
              idLivro: item.id
            },
    })
  }

  submitForm() { 
    this.criarLivro(this.form.value);
  }

  criarLivro(livro: LivroForm){
    this.service
    .criarLivro(livro)
    .subscribe(data => {
      console.log("Data", data);

      if(data != null){
        this.getLivros();
      }
    });
  }

}
