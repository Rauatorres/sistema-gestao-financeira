import { Component, input } from '@angular/core';
import { OperacaoDia } from '../../../../../../shared/model/operacao-dia';

@Component({
  imports: [],
  selector: 'li[app-historico-dia-registro]',
  styleUrl: './historico-dia-registro.css',
  templateUrl: './historico-dia-registro.html',
})
export class HistoricoDiaRegistro {
  registro = input.required<OperacaoDia>();
}
