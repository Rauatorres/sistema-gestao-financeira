import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Input } from '../../../../shared/ui/components/input/input';
import { RegistrosHistorico } from './registros-historico';
import { DateToStringPipe } from '../../../../shared/pipes/date-to-string-pipe';

@Component({
  imports: [MatIcon, Input, DateToStringPipe],
  selector: 'app-historico',
  styleUrl: './historico.css',
  templateUrl: './historico.html',
})
export class Historico {
  private registrosHistoricoService = inject(RegistrosHistorico);
  registros = this.registrosHistoricoService.registros;
}
