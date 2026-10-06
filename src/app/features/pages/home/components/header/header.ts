import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { fromEvent, map } from 'rxjs';
import { Navbar } from '../navbar/navbar';
import { Viewport } from '../../../../../core/viewport/viewport';

@Component({
  imports: [MatIconModule, Navbar],
  selector: 'header[app-header]',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  viewport = inject(Viewport);

  get isViewportWidthLarge() {
    return computed(() => this.viewport.width() >= 1025);
  }
}
