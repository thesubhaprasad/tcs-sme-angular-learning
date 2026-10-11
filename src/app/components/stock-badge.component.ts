import { Component, input } from '@angular/core';
// Both text and colour identify stock availability.
@Component({ selector: 'app-stock-badge', standalone: true, template: `
  <span class="stock-badge" [class.in-stock]="inStock()" [class.out-of-stock]="!inStock()">
    {{ inStock() ? 'In stock' : 'Out of stock' }}</span>` })
export class StockBadgeComponent { readonly inStock = input(false); }
