import { Component, input } from '@angular/core';
import type { Product } from '../models/product.model';

// The root supplies a product. Read an input signal by calling it.
@Component({ selector: 'app-product-card', standalone: true, template: `
  <article class="product-card">
    <p class="product-id">{{ product().id }}</p>
    <h3>{{ product().name }}</h3>
    <p class="price">₹{{ product().price }}</p>
    <p class="category">Category: {{ product().category }}</p>
    <span class="stock-badge" [class.in-stock]="product().inStock"
      [class.out-of-stock]="!product().inStock">
      {{ product().inStock ? 'In stock' : 'Out of stock' }}
    </span>
  </article>` })
export class ProductCardComponent {
  readonly product = input.required<Product>();
}
