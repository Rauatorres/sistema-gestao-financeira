import { Component, computed, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Input } from '../../../../shared/ui/components/input/input';
import { RegistrosHistorico } from './registros-historico';
import { DateToStringPipe } from '../../../../shared/pipes/date-to-string-pipe';
import { FormsModule } from '@angular/forms';
import { ValorOperacaoPipe } from '../../../../shared/pipes/valor-operacao-pipe';

@Component({
  imports: [MatIcon, Input, DateToStringPipe, FormsModule, ValorOperacaoPipe],
  selector: 'app-historico',
  styleUrl: './historico.css',
  templateUrl: './historico.html',
})
export class Historico {
  private registrosHistoricoService = inject(RegistrosHistorico);
  registros = this.registrosHistoricoService.registros;
  private date = new Date();
  dataSelecionada = signal({
    dia: '',
    mes: '',
    ano: '',
  });
  placeholder = {
    dia: this.date.getDate().toString(),
    mes: (this.date.getMonth() + 1).toString(),
    ano: this.date.getFullYear().toString(),
  };
  // filtro = signal<'tudo' | 'dia' | 'mes'>('tudo');

  get registrosFiltrados() {
    return computed(() =>
      this.registros.filter((registro) => {
        if (this.dataSelecionada().ano != '' && this.dataSelecionada().ano != null) {
          if (this.dataSelecionada().mes != '' && this.dataSelecionada().mes != null) {
            if (this.dataSelecionada().dia != '' && this.dataSelecionada().dia != null) {
              return (
                registro.data.getFullYear().toString() == this.dataSelecionada().ano &&
                (registro.data.getMonth() + 1).toString() == this.dataSelecionada().mes &&
                registro.data.getDate().toString() == this.dataSelecionada().dia
              );
            }

            return (
              registro.data.getFullYear().toString() == this.dataSelecionada().ano &&
              (registro.data.getMonth() + 1).toString() == this.dataSelecionada().mes
            );
          }

          return registro.data.getFullYear().toString() == this.dataSelecionada().ano;
        } else {
          return this.registros;
        }
      }),
    );
  }

  aoDigitarDia(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value;

    if (valor != '' && Number(valor) < 1) {
      input.value = '1';
    }

    if (Number(valor) > 31) {
      input.value = '31';
    }

    this.dataSelecionada.update((current) => ({ ...current, dia: valor }));
  }

  aoDigitarMes(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value;

    if (valor !== '' && Number(valor) < 1) {
      this.dataSelecionada.update((current) => ({ ...current, mes: '1' }));

      input.value = '1';
      return;
    }

    if (Number(valor) > 12) {
      this.dataSelecionada.update((current) => ({ ...current, mes: '12' }));

      input.value = '12';
      return;
    }

    this.dataSelecionada.update((current) => ({ ...current, mes: valor }));
  }

  // filtrar(valor: 'tudo' | 'dia' | 'mes') {
  //   this.filtro.set(valor);
  // }
}
