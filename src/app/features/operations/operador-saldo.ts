import { inject, Service, signal } from '@angular/core';
import { HistoricoDia } from './historico-dia';
import { OperacaoDia } from '../../shared/model/operacao-dia';

@Service()
export class OperadorSaldo {
  saldo = signal<number>(1000);
  historicoDia = inject(HistoricoDia);

  darEntrada(operacao: { valor: number; titulo: string }) {
    this.saldo.set(this.saldo() + operacao.valor);
    this.historicoDia.adicionar({
      id: crypto.randomUUID(),
      titulo: operacao.titulo,
      valor: operacao.valor,
    });
  }
}
