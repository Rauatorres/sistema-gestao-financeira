import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer-infoarea',
  styleUrl: './footer-infoarea.css',
  templateUrl: './footer-infoarea.html',
  host: {
    class: 'infoarea',
  },
})
export class FooterInfoarea {
  title = input.required<string>();
  type = input.required<'links' | 'angular'>();
}
