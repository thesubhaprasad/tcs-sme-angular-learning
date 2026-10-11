import assert from 'node:assert/strict';
import { PRODUCTS } from '../app/data/products.ts';
import { createOrderDraft, validateOrder } from '../app/data/order-draft.ts';
// Angular-independent helpers can be explained and exercised in Node.
const cart = PRODUCTS.filter(p => p.inStock);
assert.match(validateOrder([], 'Demo Customer'), /Add/);
assert.match(validateOrder(cart, ' A '), /name/);
const draft = createOrderDraft(cart, ' Demo Customer ', ' Gift wrap please ');
assert.equal(draft.total, 580); assert.equal(draft.customerName, 'Demo Customer');
assert.equal(draft.note, 'Gift wrap please'); assert.equal(draft.items[0].price, 80);
assert.throws(() => createOrderDraft([], 'Demo Customer', ''), /Add/);
console.log(draft); console.log('Validation, trim and ₹580 snapshot examples passed.');
