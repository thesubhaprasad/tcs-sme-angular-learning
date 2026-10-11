import assert from 'node:assert/strict';
import { PRODUCTS } from '../app/data/products.ts';
// Pure JavaScript operations used by computed and signal.update in the app.
const text = ' NOTE '.trim().toLowerCase();
assert.equal(PRODUCTS.filter(p => p.name.toLowerCase().includes(text))[0].name, 'Notebook');
const cart = PRODUCTS.filter(p => p.inStock), total = cart.reduce((sum, p) => sum + p.price, 0);
assert.equal(total, 580); const removed = cart.filter(p => p.id !== 'P-101');
assert.equal(removed.reduce((sum, p) => sum + p.price, 0), 500);
assert.equal(cart.length, 2); console.log({ names: cart.map(p => p.name), total, removedTotal: 500 });
