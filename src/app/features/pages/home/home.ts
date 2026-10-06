import { Component, computed, inject } from '@angular/core';
import { Header } from './components/header/header';
import { RouterOutlet } from '@angular/router';
import { Viewport } from '../../../core/viewport/viewport';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [Header, RouterOutlet, Navbar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  viewport = inject(Viewport);

  get isViewportWidthLarge() {
    return computed(() => this.viewport.width() >= 1025);
  }
}
