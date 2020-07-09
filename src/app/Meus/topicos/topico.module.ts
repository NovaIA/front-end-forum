import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopicoComponent } from './topico/topico.component';
import { EditaTopicoComponent } from './edita-topico/edita-topico.component';;


@NgModule({
  declarations: [
  TopicoComponent,
  EditaTopicoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class TopicoModule { }
