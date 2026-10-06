import { computed, DestroyRef, Directive, ElementRef, inject } from '@angular/core';
import { Viewport } from '../../../core/viewport/viewport';
import { fromEvent, map } from 'rxjs';

@Directive({
  selector: '[appFooterLinkItem]',
})
export class FooterItem {
  private element = inject(ElementRef);
  private viewport = inject(Viewport);
  private destroyRef = inject(DestroyRef);

  get isViewportWidthLarge() {
    return computed(() => this.viewport.width() > 920);
  }

  private updateStyle() {
    if (this.isViewportWidthLarge()) {
      this.element.nativeElement.style.marginRight = '2rem';
    } else {
      this.element.nativeElement.style.marginRight = '0.5rem';
      this.element.nativeElement.style.fontSize = '1.5rem';
    }
  }

  constructor() {
    this.updateStyle();

    const subscription = fromEvent(window, 'resize')
      .pipe(
        map(() => {
          width: window.innerWidth;
        }),
      )
      .subscribe(() => {
        this.updateStyle();
      });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
