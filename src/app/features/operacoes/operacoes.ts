import { inject, Service } from '@angular/core';
import { Saldo } from './saldo';
import { HistoricoDia } from './historico-dia';
import { OperacaoDia } from '../../shared/model/operacao-dia';

@Service()
export class Operacoes {
  saldo = inject(Saldo);
  historicoDia = inject(HistoricoDia);

  darEntrada(operacao: { valor: number; titulo: string }) {
    this.saldo.adicionar(operacao.valor);
    this.historicoDia.adicionar({
      id: crypto.randomUUID(),
      titulo: operacao.titulo,
      valor: operacao.valor,
    });
  }

  reverter(operacao: OperacaoDia) {
    this.saldo.adicionar(-operacao.valor);
    this.historicoDia.remover(operacao.id);
  }
}
