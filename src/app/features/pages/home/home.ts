import { Component, computed, inject } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { Viewport } from '../../../core/viewport/viewport';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [Header, Footer, RouterOutlet, Navbar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  viewport = inject(Viewport);

  get isViewportWidthLarge() {
    return computed(() => this.viewport.width() >= 900);
  }
}
