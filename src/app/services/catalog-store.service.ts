import { Injectable, signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Subscription } from 'rxjs';
import type { Product } from '../models/product.model';
import { ProductService } from './product.service';
import { requestMessage } from '../data/request-error';

// Component-scoped DI gives each App instance an independent request-state store.
@Injectable()
export class CatalogStore {
  private readonly service = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);
  private request?: Subscription;
  readonly products = signal<readonly Product[]>([]);
  readonly status = signal<'loading' | 'success' | 'error'>('loading');
  readonly error = signal('');
  load() {
    this.request?.unsubscribe(); // Cancel the previous attempt before starting a new one.
    this.status.set('loading'); this.error.set('');
    this.request = this.service.load().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: products => { this.products.set(products); this.status.set('success'); },
      error: error => { this.error.set(requestMessage(error)); this.status.set('error'); }
    });
  }
}
