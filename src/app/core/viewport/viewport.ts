import { Service, signal } from '@angular/core';

@Service()
export class Viewport {
  width = signal<number>(window.innerWidth);
}
