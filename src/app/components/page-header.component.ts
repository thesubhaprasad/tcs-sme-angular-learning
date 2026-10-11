import { Component, input } from '@angular/core';
// Named inputs let one component show each day's title and trainer information.
@Component({ selector: 'app-page-header', standalone: true, template: `
  <header class="hero"><p class="eyebrow">TCS SME TRAINING · ANGULAR DAY {{ day() }}</p>
    <h1>{{ title() }}</h1><p>{{ subtitle() }}</p>
    <p class="trainer">Trainer: {{ trainer() }} · {{ date() }}</p></header>` })
export class PageHeaderComponent {
  readonly day = input.required<string>(); readonly title = input.required<string>();
  readonly subtitle = input(''); readonly trainer = input('Subha Prasad');
  readonly date = input.required<string>();
}
