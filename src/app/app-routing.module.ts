import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Geral/login/login/login.component';
import { CriarUsuarioComponent } from './Geral/login/criar-usuario/criar-usuario.component';
import { LivroComponent } from './Meus/livros/livro/livro.component';
import { EditaLivroComponent } from './Meus/livros/edita-livro/edita-livro.component';
import { TopicoComponent } from './Meus/topicos/topico/topico.component';
import { EditaTopicoComponent } from './Meus/topicos/edita-topico/edita-topico.component';
import { RespostaComponent } from './Meus/respostas/resposta/resposta.component';
import { MeusComponent } from './Meus/meus/meus.component';
import { EditaRespostaComponent } from './Meus/respostas/edita-resposta/edita-resposta.component';

import { LivrosComponent } from './Geral/livro/livros.component';
import { TopicosComponent } from './Geral/topicos/topicos.component';
import { RespostasComponent } from './Geral/respostas/respostas.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'criar-conta', component: CriarUsuarioComponent},
  { path: '', component: LivrosComponent},
  
  { path: 'livros', component: LivrosComponent},
  { path: 'topicos', component: TopicosComponent},
  { path: 'respostas', component: RespostasComponent},


  { path: 'meus-livros', component: LivroComponent},
  { path: 'meus-livro-editar', component: EditaLivroComponent},
  { path: 'meus-topicos', component: TopicoComponent},
  { path: 'meus-topico-editar', component: EditaTopicoComponent},
  { path: 'meus-respostas', component: RespostaComponent},
  { path: 'meus-respostas-editar', component: EditaRespostaComponent},
  { path: 'meus', component: MeusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
