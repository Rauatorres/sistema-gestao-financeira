import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ɵInternalFormsSharedModule,
} from '@angular/forms';

@Component({
  imports: [RouterLink, MatIcon, ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  form = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required],
    }),
    senha: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  get isNomeInvalido() {
    return this.form.controls.nome.invalid && this.form.controls.nome.touched;
  }

  get isSenhaInvalida() {
    return this.form.controls.senha.invalid && this.form.controls.senha.touched;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('formulário válido');
    }
  }
}
