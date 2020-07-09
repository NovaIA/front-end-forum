import { NgModule } from '@angular/core';

import { LivrosComponent } from './livro/livros.component';
import { TopicosComponent } from './topicos/topicos.component';
import { RespostasComponent } from './respostas/respostas.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import { CriarUsuarioComponent } from './login/criar-usuario/criar-usuario.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LivrosComponent,
    TopicosComponent,
    RespostasComponent,
    LoginComponent,
    CriarUsuarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
})
export class GeralModule { }
