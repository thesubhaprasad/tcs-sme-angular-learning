import { Component, input } from '@angular/core';
import { ProductCardComponent } from './product-card.component';
import type { Product } from '../models/product.model';
// The parent supplies an already filtered list; this component repeats cards.
@Component({ selector: 'app-product-list', standalone: true, imports: [ProductCardComponent], template: `
  <div class="product-grid">
    @for (product of products(); track product.id) {
      <app-product-card [product]="product" [showCategory]="showCategory()" />
    } @empty { <p class="empty-state">No products match your filters.</p> }
  </div>` })
export class ProductListComponent {
  readonly products = input<readonly Product[]>([]); readonly showCategory = input(true);
}
