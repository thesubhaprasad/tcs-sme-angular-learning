import { Component } from '@angular/core';
import { PageHeaderComponent } from './components/page-header.component';
import { SectionComponent } from './components/section.component';
import { ProductSummaryComponent } from './components/product-summary.component';
import { ProductListComponent } from './components/product-list.component';
import { PRODUCTS } from './data/products';
// Day 2 configuration changes in source code. Browser controls arrive on Day 3.
@Component({ selector: 'app-root', standalone: true,
  imports: [PageHeaderComponent, SectionComponent, ProductSummaryComponent, ProductListComponent],
  templateUrl: './app.component.html' })
export class AppComponent {
  readonly products = PRODUCTS;
  readonly selectedStock: string = 'All'; // Try 'In stock' in the guided demo.
  readonly showCategory = true; // Try false; prices remain visible.
  get visibleProducts() {
    return this.selectedStock === 'In stock' ? this.products.filter(p => p.inStock) : this.products;
  }
}
