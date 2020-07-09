import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';import { LivroComponent } from './livro/livro.component';
import { EditaLivroComponent } from './edita-livro/edita-livro.component';
;


@NgModule({
  declarations: [
    LivroComponent,
    EditaLivroComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class LivroModule { }
