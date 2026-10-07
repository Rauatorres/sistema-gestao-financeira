import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatIcon],
  selector: 'app-operacao-saldo-button',
  styleUrl: './operacao-saldo-button.css',
  templateUrl: './operacao-saldo-button.html',
})
export class OperacaoSaldoButton {
  texto = input.required<string>();
  icon = input.required<string>();
}
