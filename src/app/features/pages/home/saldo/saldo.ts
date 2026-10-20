import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
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
  // private valorInput = viewChild.required<ElementRef<HTMLInputElement>>('valorInput');
  valorString = '0.00';
  operacao = {
    valor: +this.valorString,
    titulo: '',
  };

  get total() {
    return this.operadorSaldoService.saldo();
  }

  aoMudarValor(valorAtual: string) {
    this.valorString = parseFloat(valorAtual).toFixed(2);
  }

  // aoMudarValor(valorDigitado: string) {
  //   // this.operacao.valor = valorDigitado * 0.01;
  //   // if (this.operacao.valor < 0.001) {
  //   //   // alert();
  //   // console.log(this.valorString);
  //   // if (valorDigitado == '01') {
  //   let estaDepoisDaVirgula = false;
  //   let casasDecimais = 0;
  //   for (let character of valorDigitado) {
  //     console.log(character);
  //     if (character == '.' || character == ',') {
  //       estaDepoisDaVirgula = true;
  //     }
  //     if (estaDepoisDaVirgula) {
  //       if (casasDecimais > 2) {
  //         this.valorInput().nativeElement.value = valorDigitado.slice(0, valorDigitado.length - 1);
  //       }
  //     }
  //   }

  //   this.valorString = parseFloat(valorDigitado).toFixed(2);
  //   // valorDigitado = (+valorDigitado / 10).toString();
  //   // this.valorInput().nativeElement.setSelectionRange(2, 2);
  //   // }
  //   // console.log(parseFloat(valorDigitado).toFixed(2));
  //   // }
  // }

  // aoMudarValor(valorDigitado: string) {
  //   let valor = valorDigitado.replace(',', '.');

  //   // Mantém apenas números e pontos.
  //   valor = valor.replace(/[^\d.]/g, '');

  //   const partes = valor.split('.');

  //   // Mantém apenas um ponto decimal e duas casas.
  //   if (partes.length > 1) {
  //     valor = partes[0] + '.' + partes.slice(1).join('').slice(0, 2);
  //   }

  //   this.valorString = valor;

  //   // Atualiza explicitamente o elemento.
  //   this.valorInput().nativeElement.value = valor;
  // }

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
