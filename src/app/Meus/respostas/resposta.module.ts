import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RespostaComponent } from './resposta/resposta.component';
import { EditaRespostaComponent } from './edita-resposta/edita-resposta.component';;


@NgModule({
  declarations: [
  RespostaComponent,
  EditaRespostaComponent
],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RespostaModule { }
