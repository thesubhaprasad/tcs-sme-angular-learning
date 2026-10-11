import { Component, input, output } from '@angular/core';
// Controlled properties flow down. Typed output events request parent updates.
@Component({ selector: 'app-filter-bar', standalone: true, template: `
  <div class="filter-bar">
    <label for="product-search">Search products
      <input #searchBox id="product-search" type="search" placeholder="Try Notebook"
        [value]="search()" (input)="searchChange.emit(searchBox.value)" /></label>
    <label for="product-category">Category
      <select #categoryBox id="product-category" [value]="category()"
        (change)="categoryChange.emit(categoryBox.value)">
        <option value="All">All</option><option value="Stationery">Stationery</option>
        <option value="Accessories">Accessories</option></select></label>
    <label class="checkbox-label"><input #stockBox type="checkbox" [checked]="onlyInStock()"
      (change)="stockChange.emit(stockBox.checked)" />In stock only</label>
    <button type="button" class="secondary-button" (click)="reset.emit()">Reset filters</button>
  </div>` })
export class FilterBarComponent {
  readonly search = input(''); readonly category = input('All'); readonly onlyInStock = input(false);
  readonly searchChange = output<string>(); readonly categoryChange = output<string>();
  readonly stockChange = output<boolean>(); readonly reset = output<void>();
}
