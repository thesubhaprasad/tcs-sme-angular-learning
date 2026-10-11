import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { StockBadgeComponent } from './stock-badge.component';
import type { Product } from '../models/product.model';
// Inputs are read-only signals. Do not mutate the parent's product object.
@Component({ selector: 'app-product-card', standalone: true,
  imports: [CurrencyPipe, StockBadgeComponent], template: `
  <article class="product-card"><p class="product-id">{{ product().id }}</p>
    <h3>{{ product().name }}</h3>
    <p class="price">{{ product().price | currency:'INR':'symbol':'1.0-0' }}</p>
    @if (showCategory()) { <p class="category">Category: {{ product().category }}</p> }
    <app-stock-badge [inStock]="product().inStock" />
  </article>` })
export class ProductCardComponent {
  readonly product = input.required<Product>(); readonly showCategory = input(true);
}
