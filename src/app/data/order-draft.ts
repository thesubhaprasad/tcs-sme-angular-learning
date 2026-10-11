import type { Product } from '../models/product.model';
export interface OrderDraft {
  customerName: string; note: string;
  items: readonly { id: string; name: string; price: number }[]; total: number;
}
// These pure helpers can be used by a form and by the Node lesson script.
export function validateOrder(cart: readonly Product[], customerName: string): string {
  if (cart.length === 0) return 'Add an in-stock product before previewing.';
  if (customerName.trim().length < 2) return 'Enter a customer name with at least 2 characters.';
  return '';
}
export function createOrderDraft(cart: readonly Product[], customerName: string, note: string): OrderDraft {
  const message = validateOrder(cart, customerName); if (message) throw new Error(message);
  // Copy item details so later cart changes do not alter this submitted snapshot.
  return { customerName: customerName.trim(), note: note.trim(),
    items: cart.map(p => ({ id: p.id, name: p.name, price: p.price })),
    total: cart.reduce((sum, p) => sum + p.price, 0) };
}
