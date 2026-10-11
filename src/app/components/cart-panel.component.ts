import { Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import type { Product } from '../models/product.model';
// The cart remains owned by App. These outputs carry intent and stable IDs.
@Component({ selector: 'app-cart-panel', standalone: true, imports: [CurrencyPipe], template: `
  <div class="cart-panel">
    <p class="cart-summary" role="status"><strong>{{ cart().length }}</strong> items · Total:
      <strong>{{ total() | currency:'INR':'symbol':'1.0-0' }}</strong></p>
    @if (cart().length === 0) { <p class="empty-state">Your cart is empty.</p> }
    <ul class="cart-list">@for (product of cart(); track product.id) {
      <li><span>{{ product.name }} · {{ product.price | currency:'INR':'symbol':'1.0-0' }}</span>
        <button type="button" class="secondary-button" [attr.aria-label]="'Remove ' + product.name"
          (click)="remove.emit(product.id)">Remove</button></li>
    }</ul>
    <button type="button" class="secondary-button" [disabled]="cart().length === 0"
      (click)="clear.emit()">Clear cart</button>
  </div>` })
export class CartPanelComponent {
  readonly cart = input<readonly Product[]>([]); readonly total = input(0);
  readonly remove = output<string>(); readonly clear = output<void>();
}
