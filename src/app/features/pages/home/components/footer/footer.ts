import { Component, inject } from '@angular/core';
import { FooterInfoarea } from '../../../../../shared/ui/components/footer-infoarea/footer-infoarea';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FooterItem } from '../../../../../shared/ui/directives/footer-link-item';

@Component({
  imports: [FooterInfoarea, MatIcon, FooterItem],
  selector: 'footer[app-footer]',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  private getIconSvgHTMl(svgName: string) {
    return `
      <svg>
        <use href="/icons/${svgName}"></use>
      </svg>
    `;
  }

  private githubSvg = this.getIconSvgHTMl('github-brands-solid-full.svg');
  private linkedinSvg = this.getIconSvgHTMl('linkedin-brands-solid-full.svg');
  private angularSvg = this.getIconSvgHTMl('angular-brands-solid-full.svg');

  constructor() {
    this.iconRegistry.addSvgIconLiteral(
      'github',
      this.sanitizer.bypassSecurityTrustHtml(this.githubSvg),
    );
    this.iconRegistry.addSvgIconLiteral(
      'linkedin',
      this.sanitizer.bypassSecurityTrustHtml(this.linkedinSvg),
    );
    this.iconRegistry.addSvgIconLiteral(
      'angular',
      this.sanitizer.bypassSecurityTrustHtml(this.angularSvg),
    );
  }
}
