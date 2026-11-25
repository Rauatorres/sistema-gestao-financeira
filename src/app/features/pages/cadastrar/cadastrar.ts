import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { InvalidMessage } from '../../../shared/ui/directives/invalid-message';
import { Input } from '../../../shared/ui/components/input/input';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, MatIcon, ReactiveFormsModule, Input, InvalidMessage],
  selector: 'app-cadastrar',
  styleUrl: './cadastrar.css',
  templateUrl: './cadastrar.html',
})
export class Cadastrar {
  form = new FormGroup({
    nome: new FormControl('', {
      validators: [Validators.required],
    }),
    senhaGroup: new FormGroup(
      {
        senha: new FormControl('', {
          validators: [Validators.required, Validators.minLength(6)],
        }),
        confirmarSenha: new FormControl('', {
          validators: [Validators.required],
        }),
      },
      {
        validators: [this.confirmarSenha('senha', 'confirmarSenha')],
      },
    ),
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
      this.form.controls.senhaGroup.controls.senha.invalid &&
      this.form.controls.senhaGroup.controls.senha.touched &&
      this.form.controls.senhaGroup.controls.senha.dirty
    );
  }

  get isConfirmarSenhaInvalido() {
    return (
      this.form.controls.senhaGroup.invalid &&
      this.form.controls.senhaGroup.controls.senha.dirty &&
      this.form.controls.senhaGroup.controls.confirmarSenha.dirty
    );
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('formulário válido');
    }
  }

  private confirmarSenha(controlName1: string, controleName2: string) {
    return (control: AbstractControl) => {
      if (control.get(controlName1)?.value == control.get(controleName2)?.value) {
        return null;
      } else {
        return { confirmarSenhaIsValid: true };
      }
    };
  }
}
