import { Component, OnInit } from '@angular/core';
import { TopicoService } from '../service/topico.service';
import { Router } from '@angular/router';
import { Topico } from '../service/topico';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TopicoForm } from '../service/topicoForm';

@Component({
  selector: 'app-edita-topico',
  templateUrl: './edita-topico.component.html',
  styleUrls: ['./edita-topico.component.css']
})
export class EditaTopicoComponent implements OnInit {

  obj;
  topico: Topico;
  idLivro: number;
  idAutor: number;
  form: FormGroup

  constructor(private service: TopicoService, private fb: FormBuilder, private route: Router) {
    const nav = this.route.getCurrentNavigation();
    this.obj = nav.extras.state;


    this.topico = this.obj.topico;
    this.idLivro = this.obj.idLivro;
    this.idAutor = this.obj.idAutor;

    this.form = this.fb.group({
      titulo: [''],
      mensagem: ['']
    })

  }

  ngOnInit(): void {
  }

  submitForm() { 
    this.editarLivro(this.form.value);
  }

  editarLivro(livro: TopicoForm){
    console.log(livro);

    // this.service
    // .editarLivro(livro)
    // .subscribe(data => {
    //   console.log("Data", data);
    // });
  }

  submitCriar(){
    
  }

  voltar(){
    this.route.navigateByUrl("meus-livros");
  }

}
