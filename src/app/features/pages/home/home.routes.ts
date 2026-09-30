import { Routes } from '@angular/router';
import { Saldo } from './saldo/saldo';
import { Historico } from './historico/historico';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'saldo',
    pathMatch: 'full',
  },
  {
    path: 'saldo',
    component: Saldo,
  },
  {
    path: 'historico',
    component: Historico,
  },
];
