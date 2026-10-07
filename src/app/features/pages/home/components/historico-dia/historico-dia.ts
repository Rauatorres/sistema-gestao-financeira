import { Component, inject, signal } from '@angular/core';
import { HistoricoDia as HistoricoDiaService } from '../../../../operacoes/historico-dia';
import { HistoricoDiaRegistro } from './historico-dia-registro/historico-dia-registro';
import { OperacaoDia } from '../../../../../shared/model/operacao-dia';
import { Operacoes } from '../../../../operacoes/operacoes';

@Component({
  imports: [HistoricoDiaRegistro],
  selector: 'app-historico-dia',
  styleUrl: './historico-dia.css',
  templateUrl: './historico-dia.html',
})
export class HistoricoDia {
  historicoDiaService = inject(HistoricoDiaService);
  operacoes = inject(Operacoes);

  get registros() {
    return this.historicoDiaService.operacoes();
  }
}
