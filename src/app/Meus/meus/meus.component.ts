import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/Geral/login/service/login.service';

@Component({
  selector: 'app-meus',
  templateUrl: './meus.component.html',
  styleUrls: ['./meus.component.css']
})
export class MeusComponent implements OnInit {

  constructor(private service: LoginService, private route: Router) { }

  ngOnInit(): void {
  }

  livros(){
    this.route.navigateByUrl("/meus-livros", {
      state: {
              idAutor: this.service.idAutor,
            },
    })
  }
  topicos(){
    this.route.navigateByUrl("/meus-topicos", {
      state: {
              idAutor: this.service.idAutor,
            },
    })
  }
  respostas(){
    this.route.navigateByUrl("/meus-respostas", {
      state: {
              idAutor: this.service.idAutor,
            },
    })
  }

}
