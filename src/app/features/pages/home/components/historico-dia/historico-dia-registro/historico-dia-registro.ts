import {
  Component,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
  ViewChild,
} from '@angular/core';
import { OperacaoDia } from '../../../../../../shared/model/operacao-dia';
import { BotaoDeletar } from '../../../../../../shared/ui/components/botao-deletar/botao-deletar';
import { ValorOperacaoPipe } from '../../../../../../shared/pipes/valor-operacao-pipe';
import { HistoricoDia } from '../../../../../operacoes/historico-dia';
import { MatIcon } from '@angular/material/icon';
// import { OperadorSaldo } from '../../../../../operacoes/operador-saldo';

@Component({
  imports: [BotaoDeletar, ValorOperacaoPipe, MatIcon],
  selector: 'li[app-historico-dia-registro]',
  styleUrl: './historico-dia-registro.css',
  templateUrl: './historico-dia-registro.html',
  host: {
    '[class]': "this.tituloModoEditar() ? 'modo-editar' : ''",
  },
})
export class HistoricoDiaRegistro {
  registro = input.required<OperacaoDia>();
  onDeletar = output<OperacaoDia>();
  tituloModoEditar = signal(false);
  editarTituloInputElement = viewChild<ElementRef<HTMLInputElement>>('editarTitulo');
  historicoDiaService = inject(HistoricoDia);
  isTituloOperacaoHover = signal(false);

  deletar() {
    const confirmarDeletar = confirm(
      "Você realmente deseja excluir a operação '" + this.registro().titulo + ' ?',
    );
    if (confirmarDeletar) {
      this.onDeletar.emit(this.registro());
    }
  }

  editarTitulo() {
    this.tituloModoEditar.set(true);
    setTimeout(() => {
      this.editarTituloInputElement()?.nativeElement.focus();
    });
  }
  salvarTitulo() {
    this.tituloModoEditar.set(false);
    this.historicoDiaService.atualizar(
      this.registro().id,
      this.editarTituloInputElement()?.nativeElement.value!,
    );
  }
}
