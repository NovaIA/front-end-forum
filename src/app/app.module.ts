import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LivroModule } from './Meus/livros/livro.module';
import { TopicoModule } from './Meus/topicos/topico.module';
import { RespostaModule } from './Meus/respostas/resposta.module';
import { MeusComponent } from './Meus/meus/meus.component';
import { GeralModule } from './Geral/geral.module';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Geral/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MeusComponent,
    NavbarComponent,
  ],
  imports: [
    LivroModule,
    TopicoModule,
    RespostaModule,
    GeralModule,
    AppRoutingModule,
    RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
