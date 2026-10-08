import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatIcon],
  selector: 'button[app-operacao-button]',
  styleUrl: './operacao-button.css',
  templateUrl: './operacao-button.html',
  host: {
    '[class]': 'styleType()',
  },
})
export class OperacaoButton {
  texto = input.required<string>();
  icon = input.required<string>();
  styleType = input.required<'primary' | 'danger'>();
}
