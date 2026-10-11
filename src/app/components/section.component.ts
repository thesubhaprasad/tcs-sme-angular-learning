import { Component, input } from '@angular/core';
// ng-content projects the parent's nested template content into a reusable wrapper.
@Component({ selector: 'app-section', standalone: true, template: `
  <section class="content-section" [attr.aria-labelledby]="headingId()">
    <h2 [id]="headingId()">{{ title() }}</h2><ng-content />
  </section>` })
export class SectionComponent {
  readonly title = input.required<string>(); readonly headingId = input.required<string>();
}
