import { Service, signal } from '@angular/core';
import { OperacaoDia } from '../../shared/model/operacao-dia';

@Service()
export class HistoricoDia {
  operacoes = signal<OperacaoDia[]>([
    {
      id: '1',
      valor: -50,
      titulo: 'fksalmsalkdmsakdsaasdmlçdmsaldsmadsadsa',
    },
    {
      id: '2',
      valor: 500,
      titulo: 'teste',
    },
    {
      id: '3',
      valor: 15000000,
      titulo: 'teste',
    },
    {
      id: '4',
      valor: 500000,
      titulo: 'teste',
    },
  ]);

  adicionar(operacao: OperacaoDia) {
    this.operacoes.update((operacoesAtuais) => [...operacoesAtuais, operacao]);
  }

  remover(id: string) {
    this.operacoes.update((operacoesAtuais) =>
      operacoesAtuais.filter((operacao) => operacao.id != id),
    );
  }

  atualizar(id: string, titulo: string) {
    this.operacoes.update((operacoesAtuais) =>
      operacoesAtuais.map((operacao) => {
        if (operacao.id == id) {
          return { ...operacao, titulo };
        }
        return operacao;
      }),
    );
  }
}
