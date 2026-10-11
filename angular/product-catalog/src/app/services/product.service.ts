import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { validateProducts } from '../data/validate-products';
// A service owns HTTP access. Each subscription sends a request for this cold Observable.
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  load() { return this.http.get<unknown>('/products.json').pipe(map(validateProducts)); }
}
