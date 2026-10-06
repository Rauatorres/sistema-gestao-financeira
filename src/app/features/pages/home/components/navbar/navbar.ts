import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Viewport } from '../../../../../core/viewport/viewport';
import { MatIcon } from '@angular/material/icon';
import { Navlink } from './navlink/navlink';

@Component({
  imports: [Navlink],
  selector: 'nav[app-navbar]',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  viewport = inject(Viewport);

  get isViewportWidthLarge() {
    return computed(() => this.viewport.width() >= 1025);
  }
}
