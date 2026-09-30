import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import { routes as homeRoutes } from './features/pages/home/home.routes';
import { Login } from './features/pages/login/login';
import { Cadastrar } from './features/pages/cadastrar/cadastrar';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'cadastrar',
    component: Cadastrar,
  },
  {
    path: 'home',
    component: Home,
    children: homeRoutes,
  },
];
