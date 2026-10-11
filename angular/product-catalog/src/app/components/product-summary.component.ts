import { Component, computed, input } from '@angular/core';
import type { Product } from '../models/product.model';
// computed derives counts from the current input signal without storing duplicates.
@Component({ selector: 'app-product-summary', standalone: true, template: `
  <div class="summary" aria-label="Product summary">
    <p><strong>{{ products().length }}</strong> Total products</p>
    <p><strong>{{ inStockCount() }}</strong> In stock</p>
    <p><strong>{{ products().length - inStockCount() }}</strong> Out of stock</p>
  </div>` })
export class ProductSummaryComponent {
  readonly products = input<readonly Product[]>([]);
  readonly inStockCount = computed(() => this.products().filter(p => p.inStock).length);
}
