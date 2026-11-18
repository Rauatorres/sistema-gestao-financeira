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
import { Input } from '../../../shared/ui/components/input/input';
import { InvalidMessage } from '../../../shared/ui/directives/invalid-message';

@Component({
  imports: [RouterLink, MatIcon, ReactiveFormsModule, Input, InvalidMessage],
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
    return (
      this.form.controls.nome.invalid &&
      this.form.controls.nome.touched &&
      this.form.controls.nome.dirty
    );
  }

  get isSenhaInvalida() {
    return (
      this.form.controls.senha.invalid &&
      this.form.controls.senha.touched &&
      this.form.controls.senha.dirty
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('formulário válido');
    }
  }
}
