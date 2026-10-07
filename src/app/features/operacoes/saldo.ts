import { Service, signal } from '@angular/core';

@Service()
export class Saldo {
  saldo = signal<number>(1000);

  adicionar(valor: number) {
    this.saldo.set(this.saldo() + valor);
  }
}
