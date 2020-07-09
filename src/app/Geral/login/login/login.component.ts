import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthForm } from '../service/authForm';
import { LoginService } from '../service/login.service';
import { Jwt } from '../service/jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  retornoToken: Jwt;

  constructor(private service: LoginService, private fb: FormBuilder, private route: Router) {

    this.form = this.fb.group({
      email: [''],
      senha: ['']
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.auth(this.form.value);
  }

  auth(login: AuthForm){
    
    this.retornoToken = this.service.auth(login);
    console.log("Login", this.retornoToken);
  }

  criarConta(){
    this.route.navigateByUrl("criar-conta");
  }

}
