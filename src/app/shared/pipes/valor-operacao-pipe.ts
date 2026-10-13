import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valorOperacao',
})
export class ValorOperacaoPipe implements PipeTransform {
  transform(value: number): string {
    let valueToPositive = value > 0 ? value : -value;
    let transformed = valueToPositive.toString();

    if (valueToPositive >= 1000000) {
      transformed = `${valueToPositive / 1000000} M`;
    } else if (valueToPositive >= 1000) {
      transformed = `${valueToPositive / 1000} mil`;
    } else {
      transformed = valueToPositive.toFixed(2);
    }

    if (value > 0) {
      transformed = '+ ' + transformed;
    } else {
      transformed = '- ' + transformed;
    }

    return transformed;
  }
}
