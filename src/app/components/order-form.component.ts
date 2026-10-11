import { Component, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, type AbstractControl, type ValidationErrors } from '@angular/forms';
import type { Product } from '../models/product.model';
import { createOrderDraft, validateOrder, type OrderDraft } from '../data/order-draft';

// The trimmed name rule is pedagogical, not a universal rule for people's names.
function trimmedName(control: AbstractControl): ValidationErrors | null {
  return String(control.value).trim().length >= 2 ? null : { trimmedName: true };
}
@Component({ selector: 'app-order-form', standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe], template: `
  <div class="order-practice"><p>Practice only: use a fictional name. Nothing is sent or purchased.</p>
    <form class="note-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <label for="customer-name">Customer name</label>
      <input id="customer-name" formControlName="customerName" aria-required="true"
        [attr.aria-invalid]="error() && cart().length > 0 ? 'true' : 'false'"
        [attr.aria-describedby]="error() ? 'order-error' : null" placeholder="Try Demo Customer" />
      <label for="delivery-note">Delivery note (optional)</label>
      <textarea id="delivery-note" rows="2" formControlName="note" placeholder="Try Gift wrap please"></textarea>
      @if (error()) { <p id="order-error" role="alert">{{ error() }}</p> }
      <div class="form-actions"><button type="submit">Preview practice order</button>
        <button type="button" class="secondary-button" (click)="reset()">Reset order form</button></div>
    </form>
    @if (draft(); as snapshot) {
      <section class="order-preview" aria-labelledby="preview-heading">
        <h3 id="preview-heading">Practice order preview</h3>
        <p role="status">Preview ready for {{ snapshot.customerName }}. No order has been placed.</p>
        <ul>@for (item of snapshot.items; track item.id) {
          <li>{{ item.name }} · {{ item.price | currency:'INR':'symbol':'1.0-0' }}</li>
        }</ul>
        <p class="draft-total">Snapshot total: {{ snapshot.total | currency:'INR':'symbol':'1.0-0' }}</p>
        <p>Delivery note: {{ snapshot.note || 'None' }}</p>
        <p class="stock-note">Snapshot at preview time. Submit again to include later cart or form changes.</p>
      </section>
    }
  </div>` })
export class OrderFormComponent {
  readonly cart = input<readonly Product[]>([]);
  // Typed reactive controls keep validation and form state explicit in TypeScript.
  readonly form = new FormGroup({
    customerName: new FormControl('', { nonNullable: true, validators: [trimmedName] }),
    note: new FormControl('', { nonNullable: true })
  });
  readonly error = signal(''); readonly draft = signal<OrderDraft | null>(null);
  submit() {
    this.form.markAllAsTouched();
    const { customerName, note } = this.form.getRawValue();
    const message = validateOrder(this.cart(), customerName);
    this.error.set(message);
    if (message || this.form.invalid) return;
    this.draft.set(createOrderDraft(this.cart(), customerName, note));
  }
  reset() { this.form.reset(); this.error.set(''); this.draft.set(null); }
}
