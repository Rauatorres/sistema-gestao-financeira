import { Component, inject, signal } from '@angular/core';
import { SaldoCard } from '../components/saldo-card/saldo-card';
import { Saldo as OperadorSaldo } from '../../../operacoes/saldo';
import { FormsModule } from '@angular/forms';
import { HistoricoDia } from '../components/historico-dia/historico-dia';
import { Operacoes } from '../../../operacoes/operacoes';
import { OperacaoButton } from '../../../../shared/ui/components/operacao-button/operacao-button';
import { Input } from '../../../../shared/ui/components/input/input';

@Component({
  imports: [SaldoCard, FormsModule, HistoricoDia, OperacaoButton, Input],
  selector: 'app-saldo',
  styleUrl: './saldo.css',
  templateUrl: './saldo.html',
})
export class Saldo {
  private operadorSaldoService = inject(OperadorSaldo);
  private operacoes = inject(Operacoes);
  operacao = {
    valor: 0,
    titulo: '',
  };

  get total() {
    return this.operadorSaldoService.saldo();
  }

  private operar() {
    this.operacoes.darEntrada(this.operacao);
  }

  adicionar() {
    this.operar();
  }

  retirar() {
    this.operacao.valor *= -1;
    this.operar();
  }
}
