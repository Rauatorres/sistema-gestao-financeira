import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [RouterLink, MatIcon, RouterLinkActive],
  selector: 'app-navlink',
  styleUrl: './navlink.css',
  templateUrl: './navlink.html',
})
export class Navlink {
  url = input.required<string>();
  name = input.required<string>();
  icon = input.required<string>();
}
