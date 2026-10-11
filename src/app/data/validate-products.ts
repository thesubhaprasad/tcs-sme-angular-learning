import type { Product } from '../models/product.model';
// Runtime validation is still necessary: a TypeScript type cannot inspect incoming JSON.
export function validateProducts(data: unknown): readonly Product[] {
  if (!Array.isArray(data)) throw new Error('Product data must be an array.');
  const ids = new Set<string>();
  for (const p of data) {
    if (!p || typeof p.id !== 'string' || !p.id.trim() || typeof p.name !== 'string' || !p.name.trim() ||
      typeof p.price !== 'number' || !Number.isFinite(p.price) || p.price < 0 ||
      !['Stationery', 'Accessories'].includes(p.category) || typeof p.inStock !== 'boolean') {
      throw new Error('A product has missing or invalid fields.');
    }
    if (ids.has(p.id)) throw new Error('Product IDs must be unique.');
    ids.add(p.id);
  }
  return data; // Empty data is valid and gets its own success message.
}
