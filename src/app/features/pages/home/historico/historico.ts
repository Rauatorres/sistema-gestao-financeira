import { Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Input } from '../../../../shared/ui/components/input/input';
import { RegistrosHistorico } from './registros-historico';
import { DateToStringPipe } from '../../../../shared/pipes/date-to-string-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MatIcon, Input, DateToStringPipe, FormsModule],
  selector: 'app-historico',
  styleUrl: './historico.css',
  templateUrl: './historico.html',
})
export class Historico {
  private registrosHistoricoService = inject(RegistrosHistorico);
  registros = this.registrosHistoricoService.registros;
  private date = new Date();
  filtroData = {
    dia: this.date.getDate().toString(),
    mes: (this.date.getMonth() + 1).toString(),
    ano: this.date.getFullYear().toString(),
  };

  // aoMudarData(valor: string) {
  //   // console.log(this.filtroData.dia());
  //   let { dia, mes, ano } = this.filtroData;
  //   if (+mes > 12) {
  //     this.filtroData.mes = '12';
  //   }
  //   // console.log(mes);
  //   // console.log(+mes);
  //   // console.log(+mes < 1);
  //   if (+mes < 1 && mes != null) {
  //     this.filtroData.mes = '1';
  //     console.log(this.filtroData.mes);
  //     // valor = '1';
  //   }
  // }

  aoDigitarMes(event: Event) {
    const input = event.target as HTMLInputElement;
    const valor = input.value;

    if (valor !== '' && Number(valor) < 1) {
      this.filtroData.mes = '1';
      input.value = '1';
      return;
    }

    if (Number(valor) > 12) {
      this.filtroData.mes = '12';
      input.value = '12';
      return;
    }

    this.filtroData.mes = valor;
  }
}
