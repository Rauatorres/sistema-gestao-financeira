import { computed, Directive, effect, ElementRef, inject } from '@angular/core';
import { Viewport } from '../../../core/viewport/viewport';

@Directive({
  selector: 'p[appInvalidMessage]',
})
export class InvalidMessage {
  private elementRef = inject(ElementRef);
  private viewPort = inject(Viewport);

  constructor() {
    const element = this.elementRef.nativeElement;
    element.style.color = 'var(--error-msg-text-color)';
    element.style.fontWeight = '600';

    effect(() => {
      element.style.fontSize = this.viewPort.width() < 768 ? '0.7rem' : '1rem';
    });
  }
}
