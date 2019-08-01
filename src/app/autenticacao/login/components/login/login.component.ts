import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  logar() {

    if (this.form.invalid) {
        return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          localStorage.token = data.data.token;
          const usuarioData = JSON.parse(
            atob(data.data.token.split('.')[1]));
          if (usuarioData.role === 'ROLE_ADMIN') {
             this.router.navigate(['/']);
          } else {
             this.router.navigate(['/']);
          }
        },
        err => {
          let msg = 'Tente novamente em instantes.';
          if (err.status === 401) {
            msg = 'Email/senha inválido(s).';
          }
          this.snackBar.open(msg, 'Erro', {duration: 5000});
        }
      );
  }
}
