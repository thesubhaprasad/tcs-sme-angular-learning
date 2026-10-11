import { Component, computed, signal, inject, DestroyRef, type OnInit } from '@angular/core';
import { PageHeaderComponent } from './components/page-header.component';
import { SectionComponent } from './components/section.component';
import { ProductSummaryComponent } from './components/product-summary.component';
import { ProductListComponent } from './components/product-list.component';
import { FilterBarComponent } from './components/filter-bar.component';
import { CartPanelComponent } from './components/cart-panel.component';
import { PracticeNoteComponent } from './components/practice-note.component';
import { ProductService } from './services/product.service';
import { requestMessage } from './data/request-error';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Subscription } from 'rxjs';
import type { Product } from './models/product.model';
// App is the nearest common owner of shared filters and cart state.
@Component({ selector: 'app-root', standalone: true,
  imports: [PageHeaderComponent, SectionComponent, ProductSummaryComponent, ProductListComponent,
    FilterBarComponent, CartPanelComponent, PracticeNoteComponent], templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
  private readonly service = inject(ProductService);
  private readonly destroyRef = inject(DestroyRef);
  private request?: Subscription;
  readonly products = signal<readonly Product[]>([]);
  readonly status = signal<'loading' | 'success' | 'error'>('loading');
  readonly error = signal('');
  ngOnInit() { this.loadProducts(); } // Lifecycle starts the initial request once per instance.
  loadProducts() {
    this.request?.unsubscribe(); // Cancel the previous attempt before starting a new one.
    this.status.set('loading'); this.error.set('');
    this.request = this.service.load().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: products => { this.products.set(products); this.status.set('success'); },
      error: error => { this.error.set(requestMessage(error)); this.status.set('error'); }
    });
  }

  readonly search = signal(''); readonly category = signal('All');
  readonly onlyInStock = signal(false); readonly cart = signal<readonly Product[]>([]);
  // computed reruns when a signal it reads changes. It stores no duplicate editable state.
  readonly visibleProducts = computed(() => {
    const text = this.search().trim().toLowerCase();
    return this.products().filter(product => product.name.toLowerCase().includes(text) &&
      (this.category() === 'All' || product.category === this.category()) &&
      (!this.onlyInStock() || product.inStock));
  });
  readonly cartTotal = computed(() => this.cart().reduce((sum, p) => sum + p.price, 0));
  addToCart(product: Product) {
    if (!product.inStock) return;
    // Return a new array and keep one entry per product.
    this.cart.update(items => items.some(p => p.id === product.id) ? items : [...items, product]);
  }
  removeFromCart(id: string) { this.cart.update(items => items.filter(p => p.id !== id)); }
  clearCart() { this.cart.set([]); }
  resetFilters() { this.search.set(''); this.category.set('All'); this.onlyInStock.set(false); }
}
