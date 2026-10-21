import { Service } from '@angular/core';
import { RegistroHistorico } from '../../../../shared/model/registro-historico';

@Service()
export class RegistrosHistorico {
  registros: RegistroHistorico[] = [
    {
      id: '1',
      valor: -50,
      titulo: 'fksalmsalkdmsakdsaasdmlçdmsaldsmadsadsa',
      data: new Date('2026-09-29'),
    },
    {
      id: '2',
      valor: 500,
      titulo: 'teste',
      data: new Date('2026-10-10'),
    },
    {
      id: '3',
      valor: 15000000,
      titulo: 'teste',
      data: new Date('2026-10-15'),
    },
    {
      id: '4',
      valor: 500000,
      titulo: 'teste',
      data: new Date('2027-10-15'),
    },
  ];
}
