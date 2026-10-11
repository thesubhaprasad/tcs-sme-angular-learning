import assert from 'node:assert/strict';
import { PRODUCTS } from '../app/data/products.ts';
// Plain JavaScript runs in Node; Angular component decorators are not executed here.
const name = 'Notebook'; let topic = 'JavaScript'; topic = 'Angular';
const product = { id: 'P-101', name, price: 80, inStock: true };
function getName(item) { return item.name; }
const getPrice = item => item.price;
const names = PRODUCTS.map(item => getName(item));
const ready = PRODUCTS.filter(item => item.inStock);
const { id } = product; const copy = { ...product, price: 100 };
assert.equal(typeof product.price, 'number'); assert.equal(product.price, 80);
assert.equal(copy.price, 100); assert.equal(ready.length, 2);
console.log({ topic, id, names, first: PRODUCTS[0].name, count: PRODUCTS.length,
  ready: ready.length, price: getPrice(product), label: product.inStock ? 'In stock' : 'Out of stock' });
