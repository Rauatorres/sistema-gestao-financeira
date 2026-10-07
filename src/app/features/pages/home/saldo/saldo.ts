import { Component, inject, signal } from '@angular/core';
import { SaldoCard } from '../components/saldo-card/saldo-card';
import { OperadorSaldo } from '../../../operations/operador-saldo';
import { FormsModule } from '@angular/forms';
import { HistoricoDia } from '../components/historico-dia/historico-dia';

@Component({
  imports: [SaldoCard, FormsModule, HistoricoDia],
  selector: 'app-saldo',
  styleUrl: './saldo.css',
  templateUrl: './saldo.html',
})
export class Saldo {
  private operadorSaldoService = inject(OperadorSaldo);
  operacao = {
    valor: 0,
    titulo: '',
  };
  // quantia = 0;

  get total() {
    return this.operadorSaldoService.saldo();
  }

  adicionar() {
    this.operadorSaldoService.darEntrada(this.operacao);
  }

  retirar() {
    this.operacao.valor *= -1;
    this.operadorSaldoService.darEntrada(this.operacao);
  }
}
