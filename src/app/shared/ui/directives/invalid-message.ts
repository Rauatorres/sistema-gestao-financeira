import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'p[appInvalidMessage]',
})
export class InvalidMessage {
  private elementRef = inject(ElementRef);

  constructor() {
    // this.element.nativeElement.style = {
    //   // color: 'var(--negative-text-color)',
    //   color: 'red',
    // };
    const element = this.elementRef.nativeElement;
    element.style.color = 'var(--error-msg-text-color)';
    element.style.fontSize = '0.7rem';
    element.style.fontWeight = '600';
  }
}
