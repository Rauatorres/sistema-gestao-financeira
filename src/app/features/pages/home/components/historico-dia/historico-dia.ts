import { Component, inject } from '@angular/core';
import { HistoricoDia as HistoricoDiaService } from '../../../../operations/historico-dia';
import { HistoricoDiaRegistro } from './historico-dia-registro/historico-dia-registro';

@Component({
  imports: [HistoricoDiaRegistro],
  selector: 'app-historico-dia',
  styleUrl: './historico-dia.css',
  templateUrl: './historico-dia.html',
})
export class HistoricoDia {
  historicoDiaService = inject(HistoricoDiaService);
  registros = this.historicoDiaService.operacoes();
}
