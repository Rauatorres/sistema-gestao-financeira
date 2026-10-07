import { Component, inject, input, output } from '@angular/core';
import { OperacaoDia } from '../../../../../../shared/model/operacao-dia';
// import { OperadorSaldo } from '../../../../../operacoes/operador-saldo';

@Component({
  imports: [],
  selector: 'li[app-historico-dia-registro]',
  styleUrl: './historico-dia-registro.css',
  templateUrl: './historico-dia-registro.html',
})
export class HistoricoDiaRegistro {
  registro = input.required<OperacaoDia>();
  onDeletar = output<OperacaoDia>();
  // operadorSaldo = inject(OperadorSaldo);

  deletar() {
    // this.operadorSaldo.reverter(this.registro().valor);
    this.onDeletar.emit(this.registro());
  }
}
