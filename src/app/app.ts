import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, map } from 'rxjs';
import { Viewport } from './core/viewport/viewport';
import { Footer } from './features/pages/home/components/footer/footer';

@Component({
  imports: [RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  viewport = inject(Viewport);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = fromEvent(window, 'resize')
      .pipe(map(() => window.innerWidth))
      .subscribe((viewportWidth) => this.viewport.width.set(viewportWidth));

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
