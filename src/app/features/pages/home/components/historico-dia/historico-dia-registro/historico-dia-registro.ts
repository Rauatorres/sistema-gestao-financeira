import { Component, inject, input, output } from '@angular/core';
import { OperacaoDia } from '../../../../../../shared/model/operacao-dia';
import { BotaoDeletar } from '../../../../../../shared/ui/components/botao-deletar/botao-deletar';
import { ValorOperacaoPipe } from '../../../../../../shared/pipes/valor-operacao-pipe';
// import { OperadorSaldo } from '../../../../../operacoes/operador-saldo';

@Component({
  imports: [BotaoDeletar, ValorOperacaoPipe],
  selector: 'li[app-historico-dia-registro]',
  styleUrl: './historico-dia-registro.css',
  templateUrl: './historico-dia-registro.html',
})
export class HistoricoDiaRegistro {
  registro = input.required<OperacaoDia>();
  onDeletar = output<OperacaoDia>();

  deletar() {
    this.onDeletar.emit(this.registro());
  }
}
