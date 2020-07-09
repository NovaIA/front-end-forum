import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from '../service/livro';
import { LivroForm } from '../service/LivroForm';
import { LivroService } from '../service/livro.service';

@Component({
  selector: 'app-edita-livro',
  templateUrl: './edita-livro.component.html',
  styleUrls: ['./edita-livro.component.css']
})
export class EditaLivroComponent implements OnInit {

  form: FormGroup;
  obj;
  livro: Livro;
  idAutor: number;

  constructor(private service: LivroService, private fb: FormBuilder, private route: Router) { 
    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;

    this.livro = this.obj.livro;
    this.idAutor = this.obj.idAutor;

    this.form = this.fb.group({
      nome: [''],
      categoria: ['']
    })
  }

  ngOnInit(): void {
  }

  voltar(){
    this.route.navigateByUrl("meus-livros");
  }

  submitForm() { 
    this.editarLivro(this.form.value);
  }

  editarLivro(livro: LivroForm){
    this.service
    .editarLivro(livro)
    .subscribe(data => {
      console.log("Data", data);
    });
  }
}
