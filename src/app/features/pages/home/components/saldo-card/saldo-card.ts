import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'div[app-saldo-card]',
  styleUrl: './saldo-card.css',
  templateUrl: './saldo-card.html',
})
export class SaldoCard {
  total = input.required<number>();
}
