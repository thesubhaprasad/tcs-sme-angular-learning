import { Component } from '@angular/core';
import { ProductCardComponent } from './components/product-card.component';
import { PRODUCTS } from './data/products';

// A component combines a TypeScript class, metadata and an HTML template.
@Component({ selector: 'app-root', standalone: true, imports: [ProductCardComponent],
  templateUrl: './app.component.html' })
export class AppComponent {
  readonly trainer = 'Subha Prasad';
  readonly products = PRODUCTS;
  // filter computes a new array; the static source data remains unchanged.
  readonly inStockCount = this.products.filter(product => product.inStock).length;
}
