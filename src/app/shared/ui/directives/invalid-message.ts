import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'p[appInvalidMessage]',
})
export class InvalidMessage {
  private elementRef = inject(ElementRef);

  constructor() {
    const element = this.elementRef.nativeElement;
    element.style.color = 'var(--error-msg-text-color)';
    element.style.fontSize = '0.7rem';
    element.style.fontWeight = '600';
  }
}
