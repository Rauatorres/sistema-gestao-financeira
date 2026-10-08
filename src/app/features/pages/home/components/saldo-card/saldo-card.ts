import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  imports: [DecimalPipe],
  selector: 'div[app-saldo-card]',
  styleUrl: './saldo-card.css',
  templateUrl: './saldo-card.html',
})
export class SaldoCard {
  total = input.required<number>();
}
