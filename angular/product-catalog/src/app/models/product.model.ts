// A TypeScript interface documents a product's shape at compile time.
// Interfaces do not validate a JSON response at runtime.
export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly category: 'Stationery' | 'Accessories';
  readonly inStock: boolean;
  readonly brand?: string; // Optional field used in the Day 2 learner exercise.
}
