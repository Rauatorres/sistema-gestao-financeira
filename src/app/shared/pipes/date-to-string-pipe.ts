import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToString',
})
export class DateToStringPipe implements PipeTransform {
  transform(value: Date): string {
    const mesReal = value.getMonth() + 1;
    let dia = value.getDate() < 10 ? '0' + value.getDate() : value.getDate();
    let mes = mesReal < 10 ? '0' + mesReal : mesReal;

    return `${dia}/${mes}/${value.getFullYear()}`;
  }
}
